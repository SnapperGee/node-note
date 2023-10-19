import notes from "../db/db.json" assert { type: "json" };
import { resolve as resolvePath } from "node:path";
import { writeFile } from "node:fs";

const generateRandomInt = (excludeNumbers) =>
{
    let randomInt = Math.floor(Math.random() * Number.MAX_VALUE);

    if (excludeNumbers instanceof Array)
    {
        while (excludeNumbers.includes(randomInt))
        {
            randomInt = Math.floor(Math.random() * Number.MAX_VALUE);;
        }
    }

    if (excludeNumbers instanceof Set)
    {
        while (excludeNumbers.has(randomInt))
        {
            randomInt = Math.floor(Math.random() * Number.MAX_VALUE);;
        }
    }

    return randomInt;
};

export const postNotes = (req, res) =>
{
    const {title, text} = req.body;

    const ids = notes.map(note => note.id);

    const newNote = {
        id: generateRandomInt(ids),
        title,
        text
    };

    notes.push(newNote);

    const pathToDb = resolvePath("db", "db.json");

    writeFile(pathToDb, JSON.stringify(notes, null, 2), (err) =>
    {
        if (err)
        {
            res.json({message: "Error writing db file", error: err});
            return;
        };

        res.json(newNote);
    });

};

export default postNotes;
