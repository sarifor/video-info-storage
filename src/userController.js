import User from "./models/User";

export const home = (req, res) => {
    console.log("home");
    res.render("home", { pageTitle: "home!" });
};

export const getLogin = (req, res) => {
    console.log("getLogin");
    res.render("login", { pageTitle: "getLogin!" });
};

export const postLogin = (req, res) => {
    console.log("postLogin");
    res.redirect("home");
};

export const getJoin = (req, res) => {
    console.log("getJoin");
    res.render("join", { pageTitle: "getJoin!" });
};

export const postJoin = async (req, res) => {
    const { body: { username, name, password } } = req;
    
    await User.create({
        username,
        name,
        password
    });
    res.redirect("/");
};