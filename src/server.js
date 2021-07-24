import express from "express";

const app = express();
const PORT = 4040;

app.get("/", (req, res) => res.send("<h1>Home</h1>"));
app.get("/protected", (req, res) => res.send("<h1>Protected</h1>"));

// Codesandbox gives us a PORT :)
app.listen(PORT, () => `Listening!✅`);
