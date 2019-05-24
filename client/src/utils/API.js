import axios from 'axios';

// set up functions for talking to our backend

// getAllNotes
export const getAllNotes = () => {
  return axios.get('/api/notes')
}

// getNoteById
export const getNoteById = (noteId) => {
  return axios.get(`/api/notes/${noteId}`)
}

// createNote
// takes in an object => {title: "title", body: "body"}
export const createNote = (noteInfo) => {
  return axios.post('/api/notes', noteInfo)
}

// updateNote
// takes in object => {title: "title", body: "body"} AND note's id
export const updateNote = (noteId, noteInfo) => {
  return axios.put(`/api/notes/${noteId}`, noteInfo)
}

// removeNote
// takes in note's id
export const removeNote = (noteId) => {
  return axios.delete(`/api/notes/${noteId}`);
}

// export all functions so if someone needs to import all they can
export default {
  getAllNotes,
  getNoteById,
  createNote,
  updateNote,
  removeNote
}


