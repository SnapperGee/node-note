import { route as apiRoute } from "./api/api-route.mjs";
import { Router } from "express";

export const route = Router();

route.use("/api", apiRoute);

export default route;
