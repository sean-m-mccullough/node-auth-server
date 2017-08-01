const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan'); //logging framework
const app = express();
const router = require('./router');
const mongoose = require('mongoose');

// DB Setup
mongoose.connect('mongodb://localhost:auth/auth');

// App Setup
    //Invoke middleware
        app.use(morgan('combined'));
        app.use(bodyParser.json({ type: '*/*' }));

    router(app);

// Server Setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);

console.log('Server listening on port:',port);