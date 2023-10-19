import notes from "../db/db.json" assert { type: "json" };
import { resolve as resolvePath } from "node:path";
import { writeFile } from "node:fs";

export const deleteNotes = (req, res) =>
{
    const noteId = req.params.id;

    const indexOfNoteWithId = notes.findIndex(note => note.id === parseFloat(noteId));

    if (indexOfNoteWithId === -1)
    {
        res.json({deleted: null, error: null});
        return;
    }

    const notesObj = notes;
    const resObj = { deleted: structuredClone(notes[indexOfNoteWithId]), error: null }
    delete notes[indexOfNoteWithId];

    const pathToDb = resolvePath("db", "db.json");

    console.log(`\n\n\n${pathToDb}\n\n\n}`);

    writeFile(pathToDb, JSON.stringify(notesObj, null, 2), (err) =>
    {
        if (err) { resObj.error = err; };
    });

    res.json(resObj);
};

export default deleteNotes;
