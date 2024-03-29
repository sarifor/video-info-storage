import User from "./models/User";
import Video from "./models/Video";

// import bcrypt from "bcrypt";


export const home = async (req, res) => {
    try {
        const videos = await Video.find({});
        if (Object.keys(videos).length === 0) {
            return res.render("home", { err: "Please add new video" });
        } else {
            return res.render("home", { videos });
        }
    } catch (e) {
        const videos = [
            {
              _id: 1,
              title: "temp 1",
              desc: "temp 1",
            },
            {
              _id: 2,
              title: "temp 2",
              desc: "temp 2",        
            },
          ];

        return res.render("home", { videos });        
        // return res.render("home", { err: e.message });
    }
};

export const getJoin = (req, res) => {
    return res.render("join");
};

export const postJoin = async (req, res) => {
    const { name, username, password, password2 } = req.body;
    const imageUrl = req.file.location;

    // name이 db에 이미 존재하는가, (존재하면 에러 메시지를 join.pug에 보냄)
    const user = await User.findOne({ name: name });
    if (user) {
        return res.render("join", {err: "User Already Exist!"});
    } 

    // password와 password2는 일치하는가, (불일치 시 에러 메시지를 join.pug에 보냄)
    if (password !== password2) {
        return res.render("join", {err: "Passwords do not match!"});
    } 


    // (문제 없으면) User DB에 생성하고 login.pug로 return하고, 에러 발생 시 에러 메시지를 join.pug에 보냄
    try {
        await User.create({
            name,
            username,
            password,
            profileUrl: imageUrl,
        })
        return res.redirect("/login");
    } catch (e) {
        return res.render("join", { err: e.message });
    }


};

export const getLogin = (req, res) => {
    return res.render("login");
};

export const postLogin = async (req, res) => {
    //req.body에서 username과 password를 확보하여, 
    const { username, password } = req.body;

    // username이 DB에 있나 보고, password가 해당 유저의 것과 일치하나 보고,
    try {
        const user = await User.findOne({ username: username });
        if (!user) {
            return res.render("login", { err: "username does not exist" });
        };

        if (user.password !== password) {
            return res.render("login", { err: "password does not match!" });
        };

        req.session.user = user;
        req.session.loggedIn = true;
        return res.redirect("/"); 

    } catch (e) {
        return res.render("login", { err: e.message });
    }
};

export const getEdit = async (req, res) => {
    // session에 있는 user 정보가 USER DB에 있다면, 해당 user의 정보를 edit.pug로 render (try/catch)

    
    try {
        const { username } = req.session.user;

        if (!username) {
            return res.render("home", { err: "please login first" });
        }

        const user = await User.findOne({ username });
        return res.render("edit", { user });
    } catch (e) {
        return res.render("home", { err: e.message });
    }

    // console.log(user);
    // return res.render("edit", user)
};

export const postEdit = async (req, res) => {
    // session에 있는 user 정보가 USER DB에 있다면, req.body에 담긴 정보를 업뎃하고, home으로 render (try/catch)
    try {
        const { name, username, password } = req.body;
        await User.findOneAndUpdate(
            { username },
            {
                name,
                username,
                password
            }, 
            { new: true });
        return res.redirect("/");
    } catch (e) {
        return res.render("home", { err: e.message });
    };
};

export const logout = (req, res) => {
    req.session.destroy();
    return res.redirect("/");
};
