// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

// Create global app object
const app = express();

app.use(cors());

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

//Set up mongoose and connect to MongoDB DB
mongoose.connect("mongodb://user:user@ds159387.mlab.com:59387/webappproject");
mongoose.set('debug', true);

//Load models
require('./backend/models/Manga');
require('./backend/models/User');

//Load passport
require('./backend/config/passport');

// Set our api routes
app.use(require('./backend/routes'));

// Catch all other routes and return the index file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);


/*
 * Db seeding
 */

const seeder = require('./backend/dbseeding');
seeder.seedMangas();
seeder.seedUsers();

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));