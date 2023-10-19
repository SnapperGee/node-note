/**
 * @module get-notes
 */

import notes from "../db/db.json" assert { type: "json" };

/**
 * Sends `notes` json db file to client via response.
 *
 * @param {*} req Request object.
 * @param {*} res Response object.
 */
export const getNotes = (req, res) =>
{
    res.json(notes);
};

export default getNotes;
