// import express router and our controller
const router = require('express').Router();
const { 
  getAllNotes, 
  getNoteById, 
  createNote, 
  updateNote, 
  removeNote 
} = require('../../controllers/noteController');

// define routes

// GET and POST routes for /api/notes
router
  .route('/')
  .get(getAllNotes)
  .post(createNote);

// GET/PUT/DELETE routes for /api/notes/:id
router
  .route('/:id')
  .get(getNoteById)
  .put(updateNote)
  .delete(removeNote);

// export routes
module.exports = router;
