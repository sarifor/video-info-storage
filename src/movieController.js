export const home = (req, res) => {
    return res.render("home", { pageTitle: "home" });
};

export const addMovie = (req, res) => {
    console.log("addMovie!");
    return res.render("home", { pageTitle: "addMovie" });
};