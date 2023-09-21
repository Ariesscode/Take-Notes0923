const express = require('express');
const app = express();
const apiNotes = require('./Develop/db/db.json');
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

app.listen(PORT, () => {
    console.log(`App is listening on http://localhost:${PORT}.`)
});