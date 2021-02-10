const fs = require("fs");
const noteInfo = require("../db/db.json");


module.exports = (app) => {

    // Write File
    attachDatabase = (notes) => {
        notes = JSON.stringify(notes);
        fs.writeFileSync("./db/db.json", notes, (err) => {
            if (err) {
                return console.log(err);
            }
        });
    };


    // GET Route - Existing Notes
    app.get('/api/notes', (req, res) => {
        res.json(noteInfo);
    });


    // POST Route - New Notes
    app.post('/api/notes', (req, res) => {
        if (noteInfo.length == 0) {
            req.body.id = "0";
        } else {
            req.body.id = JSON.stringify(JSON.parse(noteInfo[noteInfo.length - 1].id) + 1);
        }
        
        console.log("A new note titled " + req.body.title + " was created! Note ID: " + req.body.id + ".");

        noteInfo.push(req.body);

        attachDatabase(noteInfo);

        res.json(req.body);
    });


    // DELETE Bonus
    app.delete('/api/notes/:id', (req, res) => {
        let id = req.params.id.toString();

        for (i=0; i < noteInfo.length; i++) {
            if (noteInfo[i].id == id) {
                console.log("The note has been successfully deleted!");

                res.send(noteInfo[i]);

                noteInfo.splice(i,1);

                break;
            };
        };

        attachDatabase(noteInfo);

    });

};