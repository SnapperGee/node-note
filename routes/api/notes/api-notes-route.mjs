/**
 * @module api-notes-route
 */

import { getNotes } from "../../../controllers/get-notes.mjs";
import { postNotes } from "../../../controllers/post-notes.mjs";
import { deleteNotes } from "../../../controllers/delete-notes.mjs";
import { Router } from "express";

/**
 * Sets the callbacks used by the `"/api/notes"` route path.
 *
 * Has root path, `"/"`, GET and POST methods set to the {@link getNotes} and
 * {@link postNotes} callbacks respectively and has a root path with and
 * a parameter, `"/:id"`, DELETE method set to the {@link deleteNotes} callback.
 *
 * The delete route uses the parameter to obtain the id of the note to delete.
*
 * The `"/notes"` route gets forwarded to this route in the `api-route` module
 * and then that route subsequently gets forwarded from the `"/api"` route in
 * the `routes` module.
 *
 * @type {Router}
 */
export const route = Router();

route.get("/", getNotes);
route.post("/", postNotes);
route.delete("/:id", deleteNotes);

export default route;
