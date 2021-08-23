import express from "express";
import { getUpload, postUpload } from "./controller";
import bodyParser from "body-parser";
// import router from "./router";

const app = express();
const PORT = 4000;
app.set('view engine', 'pug');
// app.set("views", path.join(__dirname, "views")); // 왠지 모르지만 안 써도 작동

app.use(bodyParser.urlencoded({ extended:true }));
app.route("/").get(getUpload).post(postUpload); // 얘를 router.js에는 못 쓰나?
app.listen(PORT, () => {console.log("server listening")});