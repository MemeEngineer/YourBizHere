const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
require('dotenv').config()
require('./config/database')

const app = express()
const PORT = process.env.PORT || 3001


//middleware
app.use(logger('dev'))
app.use(express.json())
//check for a token and create an req.user prop in the request
app.use(require('./config/checkToken'))

// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));



// Put API routes here, before the "catch all" route

app.use('/api/users', require('./routes/api/users'))

// Protect the API routes below from anonymous users
const ensureLoggedIn = require('./config/ensureLoggedIn');
app.use('/api/items', ensureLoggedIn, require('./routes/api/items'));
app.use('/api/orders', ensureLoggedIn, require('./routes/api/orders'));

// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });


app.listen(PORT, () => {
    console.log(`Express app running on port ${PORT}`)
  });