import SocketAll, { Server as WSServer, WebSocket } from 'ws';
import express, { Request, Response } from 'express';
import { createServer } from 'http';

const INDEX = 'index.html';
const PORT = process.env.PORT || 3000;

const app = express();
const server = createServer(app);

const wss = new WSServer({ server });

server.listen(PORT, () => console.log(`Listening on ${PORT}`));

const clients = new Set<WebSocket>();
wss.on('connection', (ws: WebSocket, req) => {
  console.log('Client connected');


  // Adiciona a nova conexão à lista de clientes
  clients.add(ws);

  // Escuta mensagens dos clientes
  ws.on('message', (message: SocketAll.MessageEvent) => {
    console.log('Message received:', message);

    // Envia a mensagem para todos os clientes, exceto o que enviou a mensagem
    clients.forEach(client => {
    if (client !== ws && client.readyState === WebSocket.OPEN) {
            client.send(message.toString());
        }});
    });

  const clientPort = req.socket.remotePort; // Pega a porta do cliente

  console.log('Client connected on port:', clientPort);

  // Envia a porta do cliente para ele mesmo
//   ws.send(`You connected from port: ${clientPort}`);
  
  ws.on('close', () => console.log('Client disconnected'));
});



app.get('/clients', (req: Request, res: Response) => {
    const clientList = Array.from(clients).map((ws, index) => ({
        id: index + 1,
        ip: (ws as any)._socket.remoteAddress,
        port: (ws as any)._socket.remotePort,
    }));

    res.json(clientList);
});

app.get('/' ,(req: Request, res: Response) => {
    res.sendFile(INDEX, { root: __dirname });
});
  


// setInterval(() => {
//   wss.clients.forEach((client: WebSocket) => {
//     if (client.readyState === WebSocket.OPEN) {
//       client.send(new Date().toTimeString());
//     }
//   });
// }, 1000);
