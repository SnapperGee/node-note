import express from "express";

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static("public"));

app.listen(PORT, () => console.log(`Express server listening on PORT ${PORT}...`));
