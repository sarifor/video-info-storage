import Movie from "./models/Movie";

export const seeAllMovies = async (req, res) => {
    const allMovies = await Movie.find({});
    return res.render("see", { pageTitle: "title", allMovies });
};

export const movieDetail = async (req, res) => {
    const { id } = req.params;
    try {
        const movie = await Movie.findOne( { _id: { $regex: /12345/ } } );
        return res.render("detail", { movie });
    } catch (e) {
        return res.render("detail", { err: e.message });
    }
};

/*
export const getEdit = (req, res) => {
    return res.end();
}

export const postEdit = (req, res) => {
    return res.end();
}

export const movieDelete = (req, res) => {
    return res.end();
}
*/