export const home = (req, res) => {
    res.render("home", { pageTitle: "home" });
};

export const addMovie = (req, res) => {
    console.log("addMovie!");
    res.end();
    // res.render("home", { pageTitle: "addMovie" });
};