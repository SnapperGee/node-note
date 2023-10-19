/**
 * @module redirect-to-index-html
 */

/**
 * Redirects client to `"/index.html"`.
 *
 * @param {*} req Request object.
 * @param {*} res Response object.
 */
export const redirectToIndex = (req, res) =>
{
    res.status(303).redirect("/index.html");
};

export default redirectToIndex;
