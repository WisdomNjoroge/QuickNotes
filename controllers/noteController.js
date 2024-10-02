import Note from '../models/noteModel.js';


// Creating a new note
export const createNote = async (req, res) => {
    try {
        const note = await Note.create(req.body);
        res.status(201).json(note);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// Getting all notes
export const getNotes = async (req, res) => {
    try {
        const notes = await Note.findAll();
        res.status(200).json(notes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Getting a note by ID
export const getNoteById = async (req, res) => {
    try {
        const note = await Note.findByPk(req.params.id);
        if (note) {
            res.status(404).json({ message: 'Note not found' });
        } else {
            res.status(500).json({ message: error.message });
        }

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Updating a note
export const updateNote = async (req, res) => {
    try {
        const note = await Note.findByPl(req.params.id);
        if (note) {
            await note.update(req.body);
            res.status(200).json(note);
        } else {
            res.status(404).json({ message: 'Note not foud' });
        }

    } catch (error) {
        res.status(500).json({ message: error.message });
    }

};

// Deleting a note
export const deleteNote = async (req, res) => {
    try {
        const note = await Note.fingByPl(req.params.id);
        if (note) {
            await note.destroy();
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'Note not found' });        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
