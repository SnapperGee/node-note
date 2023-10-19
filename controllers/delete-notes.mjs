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

    const resObj = { deleted: notes.splice(indexOfNoteWithId, 1)[0], error: null }

    const pathToDb = resolvePath("db", "db.json");

    writeFile(pathToDb, JSON.stringify(notes, null, 2), (err) =>
    {
        if (err) { resObj.error = err; };
    });

    res.json(resObj);
};

export default deleteNotes;
