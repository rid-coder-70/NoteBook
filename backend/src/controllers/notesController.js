import Note from "../models/Note.js";

// Get all notes
export async function getAllNotes(_, res) {
    try {
        const notes = await Note.find().sort({createdAt:-1});  // -1 will sort in desc. order (Newest first)
        res.status(200).json(notes);
    } catch (error) {
        console.error("Error in getAllNotes controller", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

// Get single note by ID
export async function getNoteById(_, res) {
    try {
        const note = await Note.findById(_.params.id);
        if (!note) {
            return res.status(404).json({ message: "Note not found!" });
        }
        res.status(200).json(note);
    } catch (error) {
        console.error("Error in getNoteById controller", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

// Create a new note
export async function createNotes(_, res) {
    try {
        const { title, content } = _.body;
        const newNote = new Note({ title, content });

        const savedNote = await newNote.save();
        res.status(201).json(savedNote);
    } catch (error) {
        console.error("Error in createNotes controller", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

// Update a note
export async function updatedNotes(_, res) {
    try {
        const { title, content } = _.body;
        const updatedNote = await Note.findByIdAndUpdate(
            _.params.id,
            { title, content },
            { new: true } // return updated document
        );

        if (!updatedNote) {
            return res.status(404).json({ message: "Note not found" });
        }

        res.status(200).json(updatedNote);
    } catch (error) {
        console.error("Error in updatedNotes controller", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

// Delete a note
export async function deletedNotes(_, res) {
    try {
        const deletedNote = await Note.findByIdAndDelete(_.params.id);

        if (!deletedNote) {
            return res.status(404).json({ message: "Note not found" });
        }

        res.status(200).json({ message: "Note deleted successfully" });
    } catch (error) {
        console.error("Error in deletedNotes controller", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
