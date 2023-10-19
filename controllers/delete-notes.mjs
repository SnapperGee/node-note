/**
 * @module delete-notes
 */

import notes from "../db/db.json" assert { type: "json" };
import { resolve as resolvePath } from "node:path";
import { writeFile } from "node:fs";

/**
 * Deletes a note from json db file.
 *
 * It uses the `id` parameter to indicate the ID of the note to delete.
 *
 * @param {*} req Request object.
 * @param {*} res Response object.
 */
export const deleteNotes = (req, res) =>
{
    // Get ID of note to delete.
    const noteId = req.params.id;

    // Find index of note to delete.
    const indexOfNoteWithId = notes.findIndex(note => note.id === noteId);

    // If no note with ID
    if (indexOfNoteWithId === -1)
    {
        res.json({message: `No id: ${noteId}`, deleted: null, error: null});
        return;
    }

    // Delete note and get deleted note.
    const deletedNote = notes.splice(indexOfNoteWithId, 1)[0]

    // Path to notes db file.
    const pathToDb = resolvePath("db", "db.json");

    // Overwrite notes db file with updated `notes` array.
    writeFile(pathToDb, JSON.stringify(notes, null, 2), (err) =>
    {
        if (err)
        {
            res.status(505).json({message: "Error writing db file", deleted: null, error: err});
            return;
        };
    });

    res.json({message: `Deleted note with id: ${noteId}`, deleted: deletedNote, error: null});
};

export default deleteNotes;
