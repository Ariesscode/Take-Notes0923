const express = require('express');
const app = express();
const termData = require('./Develop/db/db.json');
const PORT = process.env.PORT || 4007;

app.use(express.json());
app.use(express.urlencoded ({extended: true}));

app.use(express.static('public'));

app.get('/notes', (req, res) => {
    res.sendFile(`${__dirname}/notes.html`)
})

app.listen(PORT, () => {
    console.log(`App is listening on http://localhost:${PORT}.`)
});