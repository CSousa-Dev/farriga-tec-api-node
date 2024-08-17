import { Server as WSServer, WebSocket } from 'ws';
import express, { Request, Response } from 'express';
import { createServer } from 'http';

const INDEX = 'index.html';
const PORT = process.env.PORT || 3000;

const app = express();

app.use((req: Request, res: Response) => {
  res.sendFile(INDEX, { root: __dirname });
});

const server = createServer(app);

const wss = new WSServer({ server });

server.listen(PORT, () => console.log(`Listening on ${PORT}`));

wss.on('connection', (ws: WebSocket, req) => {
  console.log('Client connected');

  const clientPort = req.socket.remotePort; // Pega a porta do cliente

  console.log('Client connected on port:', clientPort);

  // Envia a porta do cliente para ele mesmo
  ws.send(`You connected from port: ${clientPort}`);
  
  ws.on('close', () => console.log('Client disconnected'));
});

setInterval(() => {
  wss.clients.forEach((client: WebSocket) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(new Date().toTimeString());
    }
  });
}, 1000);
