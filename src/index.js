'use strict';
const socketIO = require('socket.io');
const http = require('http');
const { handleMessage } = require('../writeMessageToDb');

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap({ strapi }) {

const { Server} = require('socket.io');

const io = new Server(strapi.server.httpServer)

// Define Socket.IO event handlers
io.on('connection', (socket) => {
    console.log('A client connected');

    socket.on('disconnect', () => {
        console.log('A client disconnected');
    });

    socket.on('message', (message) => {
        console.log('Received message:', message);
        handleMessage(message)
        // Broadcast the message to all connected clients
        io.emit('message', message);
    });
});

strapi.io = io;



  },

  
};
