const fs = require('fs');
const path = require('path');

function addNewNote (body, noteArray) {
    let newNote = body;
    noteArray.push(newNote);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(noteArray, null, 2)
    );
    return newNote;
};

module.exports = addNewNote;