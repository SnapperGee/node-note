import { route as apiRoute } from "./api/api-route.mjs";
import { route as notesRoute } from "./notes-route.mjs";
import { Router } from "express";

export const route = Router();

route.use("/api", apiRoute);
route.use("/notes", notesRoute);

export default route;
