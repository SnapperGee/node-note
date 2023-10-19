import { getNotes } from "../../../controllers/get-notes.mjs";
import { postNotes } from "../../../controllers/post-notes.mjs";
import { deleteNotes } from "../../../controllers/delete-notes.mjs";
import { Router } from "express";

export const route = Router();

route.get("/", getNotes);
route.post("/", postNotes);
route.delete("/", deleteNotes);

export default route;
