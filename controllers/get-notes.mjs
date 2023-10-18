import notes from "../db/db.json" assert { type: "json" };

export const getNotes = (res, req) =>
{
    res.json(notes);
};

export default getNotes;
