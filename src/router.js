import express from "express";
const router = express.Router();
import { home, read } from "./controller"; // const xxx vs. import xxx from yyy ?

router.get("/", home);
router.post("/read", read);

export default router;