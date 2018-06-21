import express from 'express';
import api from './api';

const app = express();
app.use('/api', api)

let server;
const logBootMassage = () => {
    const port = server.address().port;
    console.info(`Web server is listening at: localhost:${port}.`);
  };

const http = require('http');
server = http.createServer(app).listen(7000, undefined, logBootMassage);