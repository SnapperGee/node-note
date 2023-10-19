import { redirectToNotes } from "../controllers/redirect-to-notes-html.mjs";
import express from "express";

export const route = express.Router();

route.get("/", redirectToNotes);

export default route;
