import Movie from "./models/Movie";

export const seeAllMovies = async (req, res) => {
    // Movie DB의 모든 값을 allMovies 오브젝트에 담아서, see.pug에 보내기
    const allMovies = await Movie.find({});
    return res.render("see", { pageTitle: "seeAllMovies", allMovies });
};


export const getUpload = (req, res) => {
    return res.render("upload", { pageTitle: "getUpload" });
}


export const postUpload = async (req, res) => {
  const { name, summary, year, rating, genres } = req.body;
  await Movie.create({
      name, 
      summary, 
      year, 
      rating, 
      genres});
  return res.redirect("/");
}

export const watch = async (req, res) => {
  // Movie 리스트를 클릭함으로 params에 담아 보낸 아이디를 MOVIE DB에 돌려 movie obj 확보하여, watch.pug로 보내기
  const { id } = req.params; // _id가 아닌 이유: movieRouter.get("/:id", watch);
  const amovie = await Movie.findById(id);
  return res.render("watch", { amovie });
}

/*
export const getEdit = (req, res) => {
  // params에서 얻은 아이디를 MOVIE DB에 돌려 movie obj 확보하여, videoEdit.pug로 보내기
}

export const postEdit = (req, res) => {
  // params에서 얻은 아이디와 body에서 얻은 새 값을 MOVIE DB에 돌리고, /로 돌아가기

}

export const deleteVideo = (req, res) => {
  // params에서 얻은 아이디로 MOVIE DB에서 movie 특정하여 삭제하고, /로 돌아가기
}

export const search (req, res) => {
  // params에서 얻은 검색어를 MOVIE DB에 돌려 검색결과 배열을 확보하여, see.pug 하단에 보여주기
}
*/