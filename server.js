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


app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });





// Function to write to DB
function createNewNote(body, noteArray) {
    const note = body;
    noteArray.push(note);

    fs.writeFileSync(
        path.join(__dirname, './Develop/db/db.json'),
        JSON.stringify({ note: noteArray }, null, 2)
      );

    return body;
}



// GET Function





// POST Function
app.post('./Develop/db/db', (req, res) => {
    // set id based on what the next index of the array will be
    req.body.id = db.length.toString();
  
    // add animal to json file and animals array in this function
    const note = createNewNote(req.body, db);
  
    res.json(note);
  });