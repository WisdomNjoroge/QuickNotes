import express from 'express';
import { createNote, getNotes, getNoteById, updateNote, deleteNote } from '../controllers/noteController.js';


const router = express.Router();

// Creating a new note
router.post('/', createNote);

// Getting all notes
router.get('/', getNotes);

// Getting a note by ID
router.get('/:id', getNoteById);

// Updating a note
router.put('/:id', updateNote);

// Deleting a note
router.delete('/:id', deleteNote);

export default router;