// import Note model
const { Note } = require('../models');

// export a series of methods for handling our routes

// GET all notes
// /api/notes
function getAllNotes(req, res) {
  Note.find({})
    .then(dbNoteData => res.status(200).json(dbNoteData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
}

// GET a single note by it's _id
// /api/notes/:id
function getNoteById(req, res) {
  Note.findById(req.params.id)
    .then(dbNoteData => res.status(200).json(dbNoteData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
}

// POST/create a new note
// /api/notes with req.body => {title: "title content", body: "body content"}
function createNote(req, res) {
  Note.create(req.body)
    .then(dbNoteData => res.status(200).json(dbNoteData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
}

// PUT/update a note by its _id
// /api/notes/:id with req.body
function updateNote(req, res) {
  Note.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        title: req.body.title,
        body: req.body.body
      }
    },
    {
      new: true
    }
  )
    .then(dbNoteData => res.status(200).json(dbNoteData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
}

// DELETE/remove a note by its _id
// /api/notes/:id
function removeNote(req, res) {
  Note.remove({
    _id: req.params.id
  })
    .then(dbNoteData => res.status(200).json(dbNoteData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
}

// export all functions as methods we can import into our route definitions
module.exports = {
  getAllNotes,
  getNoteById,
  createNote,
  updateNote,
  removeNote
}
