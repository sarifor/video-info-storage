import Video from "./models/Video";
import User from "./models/User";

export const getUpload = (req, res) => {
    try {
        return res.render("upload");
    } catch (e) {
        return res.render("home", { err: e.message });
    }
};

export const postUpload = async (req, res) => {
    // req.body에서 값 꺼내어, Video DB에 저장하고, 
    // session에서 user 정보 꺼내어, Videos.owner에 저장하고, home return
    const {title, desc, tags} = req.body;
    let { _id } = req.session.user;
    let user = [];

    try {      
        user = await User.findById(_id);
    } catch (e) {
        return res.render("home", { err: e.message });
    }

    try {
        await Video.create({
            title,
            desc,
            tags: tags.split(","),
            owner: user._id
        });
        return res.redirect("/");
    } catch (e) {
        return res.render("upload", { err: e.message });
    }
};

export const getWatch = async (req, res) => {
    // req.params에서 받은 아이디를 Video DB에서 조회하여, watch.pug로 render
    const { id } = req.params;
    try {
        const video = await Video.findOne({_id: id}).populate('owner');
        console.log(video.owner.username);
        return res.render("watch", { video });
    } catch (e) {
        return res.render("home", { err: e.message });
    }
};

export const getEditVideo = async (req, res) => {
    const { id } = req.params;
    try {
        const video = await Video.findOne({_id: id});
        return res.render("editVideo", { video });
    } catch (e) {
        return res.render("watch", { err: e.message });
    }
};

export const postEditVideo = async (req, res) => {
    // req.params.id로 Video를 찾아, req.body의 값을 Video에 업뎃하고, home으로 render
    const { title, desc, tags } = req.body;
    const { id } = req.params;
    let video = [];
    
    try {
        video = await Video.findOneAndUpdate(
            { _id: id},
            { 
                title, 
                desc, 
                tags: tags.split(","),
            },
            { new: true }
        );    
        if (!video) {
            return res.render("editVideo", { err: "video does not exist" });
        };
        return res.redirect("/"); 
    } catch (e) {
        return res.render("editVideo", { err: e.message });
    }
};