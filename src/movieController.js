import Movie from "./models/Movie";

export const seeAllMovies = async (req, res) => {
    // Movie DB의 모든 값을 allMovies 오브젝트에 담아서, see.pug에 보내기
    const allMovies = await Movie.find({});
    // await Movie.create( { name: "Marina", summary: "ESPA", year: 2011, rating: 5, genres: "Music" } );
    // console.log(allMovies);
    return res.render("see", { pageTitle: "title it is", allMovies });
};