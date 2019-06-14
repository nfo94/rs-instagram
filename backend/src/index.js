// import express
const express = require("express");
// import mongoose
const mongoose = require("mongoose");
// import path (node native)
const path = require("path");
// import cors (cross origin resource sharing)
const cors = require("cors");

// saving express function to create a server and store in "app" constant
const app = express();

// import http from node
const server = require("http").Server(app);

// import socket.io - realtime connetion
const io = require("socket.io")(server);

// connecting to database
mongoose.connect(
  "mongodb+srv://omni:omni@cluster0-lzwoe.mongodb.net/test?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);

app.use((req, res, next) => {
  req.io = io;
  next();
});

app.use(cors());

app.use(
  "/files",
  express.static(path.resolve(__dirname, "..", "uploads", "resized"))
);

// setting to use routes
app.use(require("./routes"));

// to access you need to listen to a port - with access to http protocol and websockets
server.listen(3333);
