import { WebSocket, WebSocketServer } from 'ws';
import express, { Application } from 'express';
import http, { Server } from 'http';
import { seconds, sendDataHandler, startServer } from './utils/helperFunctions';

const app: Application = express();
const port: number | string = process.env.PORT || 4000;

// Create and start a basic http server
const server: Server = http.createServer(app);

const wss: WebSocketServer = new WebSocketServer({ server });
wss.on('connection', (ws: WebSocket) => {
  console.log('A new client connected');
  const allRegionsData = sendDataHandler('all-regions');
  ws.send(JSON.stringify({ updateTime: seconds, regionData: allRegionsData })); // Sending the remaining time to client, so client can set a timer to see when the next update is.

  // Trigger the functions based on events

  ws.on('message', (message: 'string') => {
    // send all regions data to client when refresh button pressed on client side
    try {
      console.log('Message received');
      const { region } = JSON.parse(message);
      const regionData = sendDataHandler(region);
      console.log(regionData);
      ws.send(
        JSON.stringify({
          updateTime: seconds === 0 ? 60 : seconds,
          regionData
        })
      );
    } catch (error) {
      console.log(
        'Error: Sending and receiving data. Here is the details: \n',
        error
      );
    }
  });

  ws.on('close', () => {
    console.log('WebSocket connection closed');
  });
});
startServer(server, port);
