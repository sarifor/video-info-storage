const db = [];

export const home = (req, res) => {
    return res.render("home", { pageTitle: "home" });
};

export const addMovie = (req, res) => {
    console.log(req.method);
    if (req.method === "POST") {
        const { body: { title, synopsis, genres } } = req;

        db.push({
            title,
            synopsis,
            genres
        })

        return res.render("home", { pageTitle: "Movie List", db });
    }
    if (req.method === "GET") {
        return res.render("upload", { pageTitle: "upload" });
    }
};