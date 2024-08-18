import express, { Application } from 'express';
import http, { Server } from 'http';

const app: Application = express();
const port: number | string = process.env.PORT || 4000;

// Create and start a basic http server
const server: Server = http.createServer(app);
server.listen(port, () => console.log(`Server is running on port ${port}`));
