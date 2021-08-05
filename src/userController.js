import User from "./models/User";

export const home = (req, res) => {
    console.log("home");
    res.render("home", { pageTitle: "home!" });
};

export const getLogin = (req, res) => {
    console.log("getLogin");
    res.render("login", { pageTitle: "getLogin!" });
};

export const postLogin = async (req, res) => {
    // req.body의 username과 password를 User DB에 조회하여, 있다면 /로, 없다면 /join으로 보내기
    const { body: { username, password } } = req;    
    
    const user = await User.exists({
        username,
        password
    });

    if (!user) { // == vs. === ?
        console.log("user nowhere");
        return res.redirect("/join")
    } else {
        req.session.user = {
            username,
        }
        req.session.save();
        res.locals.user = req.session.user;
        console.log("Below is res.locals");
        console.log(res.locals.user);
        return res.redirect("/");        
    }
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