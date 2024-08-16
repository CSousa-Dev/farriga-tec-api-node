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
app.use((req, res) => {
    res.sendFile(INDEX, { root: __dirname });
});
const server = (0, http_1.createServer)(app);
const wss = new ws_1.Server({ server });
server.listen(PORT, () => console.log(`Listening on ${PORT}`));
wss.on('connection', (ws) => {
    console.log('Client connected');
    ws.on('close', () => console.log('Client disconnected'));
});
setInterval(() => {
    wss.clients.forEach((client) => {
        if (client.readyState === ws_1.WebSocket.OPEN) {
            client.send(new Date().toTimeString());
        }
    });
}, 1000);
