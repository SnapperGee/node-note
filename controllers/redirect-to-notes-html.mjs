export const redirectToNotes = (req, res) =>
{
    res.status(303).redirect("/notes.html");
};

export default redirectToNotes;
