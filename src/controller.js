export const home = (req, res) => {
    res.render("home", {pageTitle: "home"});
}

export const read = (req, res) => {
    res.render("home", {pageTitle: "read"});
}