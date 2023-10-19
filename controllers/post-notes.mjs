import notes from "../db/db.json" assert { type: "json" };

export const postNotes = (req, res) =>
{
    res.json({message: "POST notes called"});
};

export default postNotes;
