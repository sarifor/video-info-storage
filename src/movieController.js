import model from "./models/Movie";

export const seeAllMovies = async (req, res) => {
    // Movie DB의 모든 값을 allMovies 오브젝트에 담아서, see.pug에 보내기
    const allMovies = await model.find({});
    console.log(allMovies);
    return res.render("see", { pageTitle: "title dayo", allMovies: allMovies });
};