export const redirectToIndex = (req, res) =>
{
    res.status(303).redirect("/index.html");
};

export default redirectToIndex;
