/**
 * @module notes-route
 */

import { redirectToNotes } from "../controllers/redirect-to-notes-html.mjs";
import { Router } from "express";

/**
 * Sets the callback used by the `"/notes"` route path GET method.
 *
 * Has root path, `"/"`, GET method set to the {@link redirectToNotes} callback.
 *
 * @type {Router}
 */
export const route = Router();

route.get("/", redirectToNotes);

export default route;
