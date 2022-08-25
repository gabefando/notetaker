const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
var notes = require('./db/db.json')

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

app.post('/api/notes', (req, res) => {
    let notes2 = {
        title: req.body.title,
        text: req.body.text,
    }

    let newnote2 = JSON.stringify(notes);
    
    notes.push(notes2)

    fs.writeFileSync(__dirname+"/db/db.json", newnote2);
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});



app.listen(3002)