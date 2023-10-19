/**
 * @module api-route
 */

import { route as apiNotesRoute } from "./notes/api-notes-route.mjs";
import { Router } from "express";

/**
 * Forwards all requests to the `"/notes"` route path to the
 * {@link apiNotesRoute} router.
 *
 * @type {Router}
 */
export const route = Router();

route.use("/notes", apiNotesRoute);

export default route;
