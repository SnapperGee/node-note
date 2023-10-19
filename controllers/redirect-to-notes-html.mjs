/**
 * @module redirect-to-notes-html
 */

/**
 * Redirects client to `"/notes.html"`.
 *
 * @param {*} req Request object.
 * @param {*} res Response object.
 */

export const redirectToNotes = (req, res) =>
{
    res.status(303).redirect("/notes.html");
};

export default redirectToNotes;
