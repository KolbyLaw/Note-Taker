const path = require("path");

module.exports = (app) => {
    
    // GET Route - notes.html
    app.get("/notes", function(req, res){
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });

    // GET Route - index.html
    app.get("/", function(req, res){
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

};