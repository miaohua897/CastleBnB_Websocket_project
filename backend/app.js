const express = require('express');
require('express-async-errors');
const morgan = require('morgan');
const cors = require('cors');
const csurf = require('csurf');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const { ValidationError } = require('sequelize');

const http = require('http');  
const socketIo = require('socket.io'); 

const { createServer } = require('http');
const { Server } = require('socket.io'); 

const { environment } = require('./config');
const isProduction = environment === 'production';

const app = express();
app.use(morgan('dev'));

app.use(cookieParser());
app.use(express.json());

const routes = require('./routes');

if (!isProduction) {
    app.use(cors());
  }

  const server = http.createServer(app);
  const io = new Server(server);
  let allMessages = [];
  io.on("connection", (socket) => {
    socket.on("messages", (message) => {
      allMessages.push({ ...message, id: socket.id });
      console.log(allMessages,message)
      socket.emit("allMessages", allMessages);
    });
  
    setInterval(() => {
      socket.emit("allMessages", allMessages);
    }, 5000);
  });

  app.use(
    helmet.crossOriginResourcePolicy({
      policy: "cross-origin"
    })
  );

  app.use(
    csurf({
      cookie: {
        secure: isProduction,
        sameSite: isProduction && "Lax",
        httpOnly: true
      }
    })
  );

  app.use(routes);

app.use((_req, _res, next) => {
  const err = new Error("The requested resource couldn't be found.");
  err.title = "Resource Not Found";
  err.errors = { message: "The requested resource couldn't be found." };
  err.status = 404;
  next(err);
});

app.use((err, _req, _res, next) => {
  if (err instanceof ValidationError) {
    let errors = {};
    for (let error of err.errors) {
      errors[error.path] = error.message;
    }
    err.title = 'Validation error';
    err.errors = errors;
  }
  next(err);
});

app.use((err, _req, res, _next) => {
  res.status(err.status || 500);
  console.error(err);
  res.json({
    title: err.title || 'Server Error',
    message: err.message,
    errors: err.errors,
    stack: isProduction ? null : err.stack
  });
});

module.exports = server;
