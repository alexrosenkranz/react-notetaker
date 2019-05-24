// import mongoose
const mongoose = require('mongoose');

// get Schema constructor out of mongoose
const { Schema } = mongoose;

// create a schema for notes
const NoteSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  }
});

// create our model
const Note = mongoose.model('note', NoteSchema);

// export our Note model
module.exports = Note;
