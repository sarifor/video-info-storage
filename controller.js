const db = [];

export const getUpload = (req, res) => {
    console.log("get test completed");
    return res.render("home");
};

export const postUpload = (req, res) => {
    console.log(req.body);
    const {tags} = req.body;
    const db = {
        tags: tags.split(","),
    }
    const receivedTags = db.tags;
    return res.render("home", { receivedTags });
};