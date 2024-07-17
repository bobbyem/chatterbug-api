const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const dotenv = require("dotenv").config();

const app = express();
const server = http.createServer(app);
const io = socketIo(server);
const PORT = process.env.PORT;

server.listen(PORT, () => console.log(`Listening on port ${ PORT }`));