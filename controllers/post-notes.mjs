/**
 * @module post-notes
 */

import notes from "../db/db.json" assert { type: "json" };
import { resolve as resolvePath } from "node:path";
import { writeFile } from "node:fs";
import { randomUUID } from "node:crypto";

/**
 * Adds a note to json db file and returns the added note to the client.
 *
 * @param {*} req Request object.
 * @param {*} res Response object.
 */
export const postNotes = (req, res) =>
{
    // Get title and text of note to add from client.
    const {title, text} = req.body;

    // Get IDs of all notes to make sure new ID is unique.
    const ids = notes.map(note => note.id);

    const id = ((preExistingIDs) =>
    {
        let newID = randomUUID();

        while (preExistingIDs.includes(newID))
        {
            newID = randomUUID();
        }

        return newID;
    })(ids);

    const note = {
        id,
        title,
        text
    };

    notes.push(note);

    const pathToDb = resolvePath("db", "db.json");

    writeFile(pathToDb, JSON.stringify(notes, null, 2), (err) =>
    {
        if (err)
        {
            res.status(505).json({message: "Error writing db file", error: err});
            return;
        };

        res.json(note);
    });

};

export default postNotes;
