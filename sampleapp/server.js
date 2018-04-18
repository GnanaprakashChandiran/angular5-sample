(function () {
    'use strict';
    var express = require('express');
    // var app = express();
    const path = require('path');
    const http = require('http');
    const bodyParser = require('body-parser');
    const app = express();
var db = require('./server/db_connection');
var studentActivities = require('./server/service/studentActivities');
// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));


// Catch all other routes and return the index file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/src/index.html'));
});

app.post('/student', studentActivities.createStudent)
/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));
    // app.get('/', function(req, res) {
    //     res.sendFile(__dirname+'/src/index.html');
    // });
})();