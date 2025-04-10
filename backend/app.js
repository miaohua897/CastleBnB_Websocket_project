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

// backend/app.js
const routes = require('./routes');

// ...



// Security Middleware
if (!isProduction) {
    // enable cors only in development
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
  
  // helmet helps set a variety of headers to better secure your app
  app.use(
    helmet.crossOriginResourcePolicy({
      policy: "cross-origin"
    })
  );
  
  // Set the _csrf token and create req.csrfToken method
  app.use(
    csurf({
      cookie: {
        secure: isProduction,
        sameSite: isProduction && "Lax",
        httpOnly: true
      }
    })
  );

  app.use(routes); // Connect all the routes


  ////////////////////////////////////////////
// backend/app.js
// ...
// Catch unhandled requests and forward to error handler.
app.use((_req, _res, next) => {
  const err = new Error("The requested resource couldn't be found.");
  err.title = "Resource Not Found";
  err.errors = { message: "The requested resource couldn't be found." };
  err.status = 404;
  next(err);
});


// Process sequelize errors
app.use((err, _req, _res, next) => {
  // check if error is a Sequelize error:
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

  // app.use((err, req, res, next) => {
  //   console.error(err.stack)
  //   res.status(500).send('Something broke!')
  // })
// backend/app.js

// Error formatter
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
  ///////////////////////////////////////////

  // module.exports = app;
  module.exports = server;
