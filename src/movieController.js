export const home = (req, res) => {
    return res.render("home", { pageTitle: "home" });
};

export const addMovie = (req, res) => {
    console.log(req.method);
    if (req.method === "POST") {
        console.log("POST here");
        res.end();
    }
    if (req.method === "GET") {
        return res.render("upload", { pageTitle: "upload" });
    }
};