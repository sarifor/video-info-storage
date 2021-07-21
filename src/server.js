import express from "express";

const app = express();
const PORT = 4000;

const handleHome = (res, req) => res.render("home");

const handleAbout = (res, req) => res.render("about");

const handleContact = (res, req) => res.render("contact");

const handleLogin = (res, req) => res.render("login");

app.get("/", handleHome);
app.get("/about", handleAbout);
app.get("/contact", handleContact);
app.get("/login", handleLogin);

const handleListening = () => console.log("Listening now!");

app.listen(PORT, handleListening);

//서버 실행 어떻게 하지? Console에서 npm run start 안 먹힘
