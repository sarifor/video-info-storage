import Video from "./models/Video";

export const getUpload = (req, res) => {
    try {
        return res.render("upload");
    } catch (e) {
        return res.render("home", { err: e.message });
    }
};

export const postUpload = async (req, res) => {
    // req.body에서 값 꺼내어, Video DB에 저장하고, home return
    const {title, desc, tags} = req.body;

    try {
        await Video.create({
            title,
            desc,
            tags,
        })
        return res.redirect("/");
    } catch (e) {
        return res.render("upload", { err: e.message });
    }
};

export const getWatch = (req, res) => {
    // req.params에서 받은 아이디를 Video DB에서 조회하여, watch.pug로 render
    res.render("watch", { video });
};

export const postWatch = (req, res) => {
    //
};