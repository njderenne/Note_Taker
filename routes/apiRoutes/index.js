//import { nanoid } from 'nanoid';

const { nanoid } = require('nanoid');
const router = require('express').Router();
const notes = require('../../db/db');
const addNewNote = require('../../lib/notes');

router.get('/notes', (req, res) => {
    res.json(notes);
});

router.post('/notes', (req, res) => {
    //req.body.id = notes.length.toString();
    req.body.id = nanoid(5);

    const note = addNewNote(req.body, notes);

    res.json(note);
})

module.exports = router;