const express = require('express');
const app = express();
const apiNotes = require('./Develop/db/db.json');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const PORT = process.env.PORT || 4007;

app.use(express.json());
app.use(express.urlencoded ({extended: true}));

app.use(express.static('public'));

app.get('/notes', (req, res) => {
    res.sendFile(`${__dirname}/Develop/public/notes.html`)
});

app.get('*', (req,res) => {
    res.sendFile(`${__dirname}/Develop/public/index.html`)
});

app.get('/api/notes', (req,res) => {
    res.json(apiNotes);
});

app.post('/api/notes', (req,res) => {
    const { title, text } = req.body;

    console.info(`${req.method} request received to add a new note.`);

    if (title && text) {

    const newNote = {
        title,
        text,
        note_id: uuidv4(),
    };
    const noteString = JSON.stringify(newNote);

    fs.appendFile(apiNotes, newNote, (err) =>
    err ? console.error(err) : console.log(`New ${newNote.text} has been saved to db.json file.`))
    }
});


app.listen(PORT, () => {
    console.log(`App is listening on http://localhost:${PORT}.`)
});