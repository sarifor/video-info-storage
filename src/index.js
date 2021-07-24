import express from "express";
import globalRouter from "./routers/globalRouter";
import storyRouter from "./routers/storyRouter";
import userRouter from "./routers/userRouter";

const app = express();
const PORT = 4040;

app.use("/", globalRouter);
app.use("/stories", storyRouter);
app.use("/users", userRouter);

app.listen(PORT, () => console.log(`Listening!`));
