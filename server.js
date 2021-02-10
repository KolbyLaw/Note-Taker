// Standard Dependencies + PORT
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const fs = require('fs');
const path = require('path');


// Middleware Functions
    // Express.js method, POST data -> key/value pairings accessed via req.body. True = potential nested sub-array data.
app.use(express.urlencoded({ extended: true }));

    // Incoming JSON POST data -> parses into req.body JS object.
app.use(express.json());

    // Make Public folder a static resource.
app.use(express.static('public'));


// Routes
require('./routes/htmlRoutes')(app);
require('./routes/apiRoutes')(app);


// PORT Run
app.listen(PORT, () => {
    console.log(`The app is now running on port ${PORT}!`);
  });