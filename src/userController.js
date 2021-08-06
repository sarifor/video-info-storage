import User from "./models/User";
import bcrypt from "bcrypt";

export const home = (req, res) => {
    if (req.session.user) {
        console.log(req.session.user);
        return res.render("profile", { pageTitle: "Profile!" }); // return을 써 줘야 함수가 끝난다!
    } else {
        console.log(req.session.user);        
        return res.redirect("/login");
    }    
};

export const getLogin = (req, res) => {
    console.log("getLogin");
    return res.render("login", { pageTitle: "getLogin!" });
};

export const postLogin = async (req, res) => {
    // req.body의 username과 password를 User DB에 조회하여, 있다면 /로, 없다면 /join으로 보내기
    const { body: { username, password } } = req;    
    
    const user = await User.find({
        username,
        password
    });

    if (!user) { // == vs. === ?
        console.log("user nowhere");
        return res.redirect("/join")
    } else {
        console.log(user);
        req.session.user = user;
        console.log(req.session.user);
        // req.session.save();
        // res.locals.user = req.session.user;
        // console.log("Below is res.locals");
        // console.log(res.locals.user);
        return res.redirect("/");        
    }
};

export const getJoin = (req, res) => {
    console.log("getJoin");
    res.render("join", { pageTitle: "getJoin!" });
};

export const postJoin = async (req, res) => {
    const { body: { username, name, password } } = req;
    // password를 해싱하기
    bcrypt.hash(password, 10, function(err, hash) {
        console.log(hash);
        global.hashedPassword = hash; // return hash 하면 안 되는 이유?
    });

    // console.log(hashedPassword);
    // res.end();

    await User.create({
        username,
        name,
        password: hashedPassword
    });
    
    return res.redirect("/");
};