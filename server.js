const express = require('express');
const app = express();
const apiNotes = require('./Develop/db/db.json');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');


const PORT = process.env.PORT || 4007;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Everything in folder 'public' will have a pre route 
app.use(express.static('Develop/public'));

//Retrieving and reading data from route configured
app.get('/notes', (req, res) => {
    res.sendFile(`${__dirname}/Develop/public/notes.html`)
});

app.get('/api/notes', (req, res) => {
    res.json(apiNotes);
});


//deconstructing properties I care about to use to do work
app.post('/api/notes', (req, res) => {
    const { title, text } = req.body;

    console.info(`${req.method} request received to add a new note.`);

    if (title && text) {

        const newNote = {
            title,
            text,
            id: uuidv4(), //adding a unique id property to each note that will be saved to the array in db.json file
        };
        apiNotes.push(newNote); //add saved note to array db.json file
        fs.writeFile('./Develop/db/db.json', JSON.stringify(apiNotes), (err) =>
            err ? console.error(err) : console.log(`${newNote.text}. New note has been saved to db.json file.`));

        const response = {
            status: 'Success!',
            body: newNote
        };
        console.log(response);
        res.status(201).json(response);
    } else {
        res.status(500).json('Post error!') //status code to let user know of any errors
    }


});

app.delete('/api/notes/:id', (req, res) => { //route configured to enter input or parameters such as id, which will be used
    const noteId = req.params.id;

    const noteIndex = apiNotes.findIndex(({id}) => id === noteId);

    if (noteIndex >= 0) {
        apiNotes.splice(noteIndex, 1); //it will delete the index  if indexnumber of array is equal to or greater than 0

        fs.writeFile('./Develop/db/db.json', JSON.stringify(apiNotes), (err) => {
            if (err) {
                console.error(err);
                res.status(500).json('Error deleting the note.');
            } else {
                console.log(`Note with ID ${noteId} has been deleted.`);
                res.status(200).json({ message: 'Note deleted successfully!' });
            }

        });
    } else {
        res.status(404).json('Note not found');
    }
});

app.get('*', (req, res) => {
    res.sendFile(`${__dirname}/Develop/public/index.html`) //catch all or fall back route 
});


app.listen(PORT, () => {
    console.log(`App is listening on http://localhost:${PORT}.`) // port set for this app to run on either enviornment variable if there is one and if notthen it will run on 4007
});