const express = require('express');
const app = express();
const apiNotes = require('./Develop/db/db.json');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const uuid = uuidv4();

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
        note_id: uuid,
    };
    apiNotes.push(newNote);
    fs.writeFile('./Develop/db/db.json', JSON.stringify(apiNotes), (err) =>
    err ? console.error(err) : console.log(`${newNote.text}. New note has been saved to db.json file.`));

    const response = {
        status: 'Success!',
        body: newNote
    };
    console.log(response);
    res.status(201).json(response);
    } else {
        res.status(500).json('Post error!')
    }

    
});


app.listen(PORT, () => {
    console.log(`App is listening on http://localhost:${PORT}.`)
});