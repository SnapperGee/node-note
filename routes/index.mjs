/**
 * @module routes
 */

import { route as apiRoute } from "./api/api-route.mjs";
import { route as rootNotesRoute } from "./notes-route.mjs";
import { Router } from "express";

/**
 * Forwards the `"/api"` and `"/notes"` route paths to the {@link apiRoute} and
 * {@link rootNotesRoute} routers respectively.
 *
 * @type {Router}
 */
export const route = Router();

route.use("/api", apiRoute);
route.use("/notes", rootNotesRoute);

export default route;
