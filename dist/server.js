"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const express_1 = __importDefault(require("express"));
const http_1 = require("http");
const INDEX = 'index.html';
const PORT = process.env.PORT || 3000;
const app = (0, express_1.default)();
const server = (0, http_1.createServer)(app);
const wss = new ws_1.Server({ server });
server.listen(PORT, () => console.log(`Listening on ${PORT}`));
const clients = new Set();
wss.on('connection', (ws, req) => {
    console.log('Client connected');
    // Adiciona a nova conexão à lista de clientes
    clients.add(ws);
    // Escuta mensagens dos clientes
    ws.on('message', (message) => {
        console.log('Message received:', message);
        // Envia a mensagem para todos os clientes, exceto o que enviou a mensagem
        clients.forEach(client => {
            if (client !== ws && client.readyState === ws_1.WebSocket.OPEN) {
                client.send(message.toString());
            }
        });
    });
    const clientPort = req.socket.remotePort; // Pega a porta do cliente
    console.log('Client connected on port:', clientPort);
    // Envia a porta do cliente para ele mesmo
    //   ws.send(`You connected from port: ${clientPort}`);
    ws.on('close', () => console.log('Client disconnected'));
});
app.get('/clients', (req, res) => {
    const clientList = Array.from(clients).map((ws, index) => ({
        id: index + 1,
        ip: ws._socket.remoteAddress,
        port: ws._socket.remotePort,
    }));
    res.json(clientList);
});
app.get('/', (req, res) => {
    res.sendFile(INDEX, { root: __dirname });
});
// setInterval(() => {
//   wss.clients.forEach((client: WebSocket) => {
//     if (client.readyState === WebSocket.OPEN) {
//       client.send(new Date().toTimeString());
//     }
//   });
// }, 1000);
