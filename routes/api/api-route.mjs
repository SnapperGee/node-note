import { route as notesRoute } from "./notes/notes-route.mjs";
import { Router } from "express";

export const route = Router();

route.use("/notes", notesRoute);

export default route;
