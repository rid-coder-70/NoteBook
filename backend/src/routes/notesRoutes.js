import express from "express";
import { createNotes, getAllNotes, updatedNotes, deletedNotes, getNoteById } from "../controllers/notesController.js";

const router = express.Router();

router.get("/", getAllNotes);
router.get("/:id", getNoteById);
router.post("/", createNotes);
router.put("/:id", updatedNotes);
router.delete("/:id", deletedNotes);

export default router;
