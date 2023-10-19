import notes from "../db/db.json" assert { type: "json" };

export const deleteNotes = (req, res) =>
{
    res.json({message: "DELETE notes called"});
};

export default deleteNotes;
