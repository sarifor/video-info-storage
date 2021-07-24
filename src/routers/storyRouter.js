import express from "express";

const storyRouter = express.Router();

storyRouter.get("/:id/edit", (res, req) => console.log("edit"));
storyRouter.get("/:id/delete", (res, req) => console.log("delete"));
storyRouter.get("/:id", (res, req) => console.log("id"));

export default storyRouter;
