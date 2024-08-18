import express, { Application } from 'express';
import http, { Server } from 'http';

import { startServer } from './utils/helperFunctions';

const app: Application = express();
const port: number | string = process.env.PORT || 4000;

// Create and start a basic http server
const server: Server = http.createServer(app);
startServer(server, port);
