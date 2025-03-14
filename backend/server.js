
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000", // Permitir conexões do frontend React
    methods: ["GET", "POST"]
  }
});

// Middleware
app.use(cors());
app.use(express.json());

// Conexão com MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000
})
  .then(() => console.log('MongoDB conectado'))
  .catch(err => console.log(err));

// Model de Mensagem
const messageSchema = new mongoose.Schema({
  username: String,
  text: String,
  createdAt: { type: Date, default: Date.now }
});
const Message = mongoose.model('Message', messageSchema);

// Rota para pegar mensagens
app.get('/messages', async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: 'asc' });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar mensagens' });
  }
});

// Socket.io
io.on('connection', (socket) => {
  console.log('Novo cliente conectado:', socket.id);

  // Enviar mensagens antigas ao conectar
  socket.emit('requestPreviousMessages', async () => {
    try {
      const messages = await Message.find().sort({ createdAt: 'asc' });
      const formattedMessages = messages.map(msg => ({
        username: msg.username,
        text: msg.text,
        createdAt: msg.createdAt
      }));
      console.log('Enviando mensagens antigas:', formattedMessages);
      socket.emit('previousMessages', formattedMessages);
    } catch (err) {
      console.log('Erro ao buscar mensagens:', err);
      socket.emit('previousMessages', []);
    }
  });

  // Lidar com nova mensagem
  socket.on('sendMessage', async (data) => {
    const newMessage = new Message(data);
    await newMessage.save();
    const formattedMessage = {
      username: newMessage.username,
      text: newMessage.text,
      createdAt: newMessage.createdAt
    }
    io.emit('receiveMessage', formattedMessage); // Broadcast para todos os clientes
  });

  // Lidar com desconexão
  socket.on('disconnect', () => {
    console.log('Cliente desconectado:', socket.id);
  });
});

// Iniciar servidor
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});