import notes from "../db/db.json" assert { type: "json" };

export const getNotes = (req, res) =>
{
    res.json(notes);
};

export default getNotes;
