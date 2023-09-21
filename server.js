const express = require('express');
const app = express();
const apiNotes = require('./Develop/db/db.json');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const uuid = uuidv4();

const PORT = process.env.PORT || 4007;



app.use(express.static('Develop/public'));

app.use(express.json());
app.use(express.urlencoded ({extended: true}));

app.get('/notes', (req, res) => {
    res.sendFile(`${__dirname}/Develop/public/notes.html`)
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

app.get('*', (req,res) => {
    res.sendFile(`${__dirname}/Develop/public/index.html`)
});

app.delete('/api/notes/:id', (req,res) => {
    const noteId = req.params.note_id;

    const noteIndex = apiNotes.findIndex((note) => note.note_id === noteId);

    if(noteIndex !== -1) {
        apiNotes.splice(noteIndex, 1);

        fs.writeFile('./Develop/db/db.json', JSON.stringify(apiNotes), (err) => {
            if (err) {
                console.error(err);
                res.status(500).json('Error deleting the note.');
            } else {
                console.log(`Note with ID ${noteId} has been deleted.`);
                res.status(200).json({ message: 'Note deleted successfully!'});
            }
            
        });
    } else {
        res.status(404).json('Note not found');
    }
    });
    
})

app.listen(PORT, () => {
    console.log(`App is listening on http://localhost:${PORT}.`)
});