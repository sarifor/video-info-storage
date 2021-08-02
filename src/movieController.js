export const seeAllMovies = (req, res) => {
    //Movie DB의 모든 값을 allMovies 오브젝트에 담아서, see.pug에 보내기
    return res.render("see", { pageTitle: "title dayo" });
};