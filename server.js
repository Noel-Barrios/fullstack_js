// import http from 'http';
// var http = require('http');

// const server = http.createServer();

// server.listen(8080);

// server.on('request', (req, res) => {
//     res.write('Hello HTTP!\n');
//     setTimeout(() => {
//         res.write("i can stream!\n");
//         res.end();
//     }, 3000)
// }); 

import config from './config';
import fs from 'fs';
import apiRouter from './api';

import express from 'express';
// to create a server with Express, we just invoke the imported Express variable as a function
const server = express();

// set the view engine to be 'ejs'
server.set('view engine', 'ejs');

server.get('/', (req, res) => {
    // to render an EJS template, (on root level), we can use the res.render() method, passing in the name of the template
    res.render('index', {
        // demonstrating how to pass variables from express into EJS
        content: 'Hello Express and <em> EJS! </em>'
    });
});

// express server handles server side routing.  it exposes an API to listen to certain routes.
// server.get('/', (req, res) => {
//     res.send('Hello Express');
// });

// server.get('/about.html', (req, res) => {
//     fs.readFile('./about.html', (err, data) => {
//         res.send(data.toString());
//     });
// });

// a simpler way to do what you see above.  Express has a static middleware that we can use to automatically server
// static assets.   '.use'  is how we put a middleware in the Express middleware stack.
server.use(express.static('public'));
server.use('/api', apiRouter);

// listening to a single request event
server.listen(config.port, () => {
    console.info('Express listening on port ', config.port);
});


