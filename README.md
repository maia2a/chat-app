

---

# Real-Time Chat Application

Este é um aplicativo de chat em tempo real desenvolvido com React, Socket.io, Express e MongoDB. O objetivo deste projeto é demonstrar como lidar com comunicação assíncrona e dados em tempo real, bem como implementar funcionalidades como envio de mensagens instantâneas e histórico de conversas.

## Índice

- [Visão Geral](#visão-geral)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Funcionalidades](#funcionalidades)
- [Instalação e Configuração](#instalação-e-configuração)
  - [Pré-requisitos](#pré-requisitos)
  - [Backend](#backend)
  - [Frontend](#frontend)
- [Executando o Projeto](#executando-o-projeto)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Contribuição](#contribuição)
- [Licença](#licença)

---

## Visão Geral

Este projeto implementa um sistema de chat em tempo real que permite aos usuários enviar e receber mensagens instantaneamente. As mensagens são armazenadas no MongoDB para persistência e recuperadas quando um novo usuário entra no chat. O aplicativo utiliza Socket.io para comunicação bidirecional entre o cliente e o servidor.

---

## Tecnologias Utilizadas

- **Frontend**:
  - React.js (Interface de Usuário)
  - Socket.io-client (Comunicação em Tempo Real)

- **Backend**:
  - Node.js e Express (Servidor Web)
  - Socket.io (Gerenciamento de Conexões em Tempo Real)
  - Mongoose (Modelagem de Dados no MongoDB)

- **Banco de Dados**:
  - MongoDB (Armazenamento de Mensagens)

- **Ferramentas Adicionais**:
  - Nodemon (Desenvolvimento em Hot Reload)
  - Dotenv (Gerenciamento de Variáveis de Ambiente)

---

## Funcionalidades

1. **Chat em Tempo Real**:
   - Envio e recebimento de mensagens instantaneamente.
   - Atualização automática da interface quando novas mensagens são recebidas.

2. **Histórico de Mensagens**:
   - Recuperação de mensagens antigas ao conectar-se ao chat.

3. **Persistência de Dados**:
   - Todas as mensagens são armazenadas no MongoDB para acesso futuro.

4. **Interface Simples e Responsiva**:
   - Interface minimalista e fácil de usar.

---

## Instalação e Configuração

### Pré-requisitos

Antes de começar, certifique-se de ter instalado os seguintes softwares:

- **Node.js e NPM**: [Download aqui](https://nodejs.org/)
- **MongoDB**: [Download aqui](https://www.mongodb.com/try/download/community) ou use o Docker.
- **WSL (opcional)**: Para desenvolvimento no Windows Subsystem for Linux.

### Backend

1. **Clone o Repositório**:
   ```bash
   git clone https://github.com/seu-usuario/chat-app.git
   cd chat-app/backend
   ```

2. **Instale as Dependências**:
   ```bash
   npm install
   ```

3. **Configure o Arquivo `.env`**:
   Crie um arquivo `.env` na pasta `backend` com o seguinte conteúdo:
   ```
   MONGO_URI=mongodb://localhost:27017/chatapp
   PORT=5000
   ```

4. **Inicie o MongoDB**:
   Se estiver usando WSL, inicie o serviço MongoDB:
   ```bash
   sudo systemctl start mongod
   ```

5. **Execute o Servidor**:
   ```bash
   npm run dev
   ```

### Frontend

1. **Navegue até a Pasta `frontend`**:
   ```bash
   cd ../frontend
   ```

2. **Instale as Dependências**:
   ```bash
   npm install
   ```

3. **Execute o Frontend**:
   ```bash
   npm start
   ```

---

## Executando o Projeto

1. Certifique-se de que o backend está rodando (`npm run dev`).
2. Inicie o frontend (`npm start`).
3. Abra o navegador em `http://localhost:3000`.
4. Teste o chat enviando mensagens e abrindo várias abas para simular múltiplos usuários.

---

## Estrutura do Projeto

```
chat-app/
├── backend/
│   ├── node_modules/          # Dependências do backend
│   ├── models/                # Modelos do MongoDB (Message.js)
│   ├── .env                   # Variáveis de ambiente
│   ├── package.json           # Dependências e scripts do backend
│   └── server.js              # Lógica principal do servidor
├── frontend/
│   ├── public/                # Arquivos públicos (favicon, etc.)
│   ├── src/                   # Código-fonte do frontend
│   │   ├── components/        # Componentes React (Chat, MessageList, etc.)
│   │   ├── App.js             # Componente principal
│   │   └── index.js           # Ponto de entrada do frontend
│   ├── package.json           # Dependências e scripts do frontend
│   └── README.md              # Documentação do frontend
└── README.md                  # Documentação geral do projeto
```

---

## Contribuição

Contribuições são bem-vindas! Siga os passos abaixo para contribuir:

1. Faça um fork do repositório.
2. Crie uma branch para sua feature (`git checkout -b feature/nova-funcionalidade`).
3. Faça commit das suas alterações (`git commit -m 'Adiciona nova funcionalidade'`).
4. Envie suas alterações para o repositório remoto (`git push origin feature/nova-funcionalidade`).
5. Abra um Pull Request.

---

## Licença

Este projeto está licenciado sob a **MIT License**. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Se precisar de ajuda ou tiver dúvidas sobre o projeto, sinta-se à vontade para entrar em contato! 😊
