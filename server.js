const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const notes = fs.readFileSync('./db/db.json')

// from miniproject
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

app.get('/api/notes', (req, res) => {
    res.json(notes);
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});



app.listen(3002)