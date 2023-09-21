const express = require('express');
const app = express();
const termData = require('./Develop/db/db.json');
const PORT = process.env.PORT || 4007;

app.use(express.json());
app.use(express.urlencoded ({extended: true}));

app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`App is listening on http://localhost:${PORT}.`)
});