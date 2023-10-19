import { route as routes } from "./routes/index.mjs";
import express from "express";

const PORT = process.env.PORT || 3001;

const app = express();

app.use(routes);
app.use(express.static("public"));

app.listen(PORT, () => console.log(`Express server listening on PORT ${PORT}...`));
