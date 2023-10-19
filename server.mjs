import redirectToIndex from "./controllers/redirect-to-index-html.mjs";
import { route as routes } from "./routes/index.mjs";
import express from "express";

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);
app.use(express.static("public"));

app.get("*", redirectToIndex);

app.listen(PORT, () => console.log(`Express server listening on http://localhost:${PORT}...`));
