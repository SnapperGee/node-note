import { getNotes } from "../../../controllers/get-notes.mjs";
import { Router } from "express";

export const route = Router();

route.get("/", getNotes);

export default route;
