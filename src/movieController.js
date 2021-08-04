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

export const getEdit = async (req, res) => {
  // params에서 얻은 아이디를 MOVIE DB에 돌려 movie obj 확보하여, videoEdit.pug로 보내기
  const { id } = req.params;
  const amovie = await Movie.findById(id);
  return res.render("edit", { pageTitle: "getEdit", amovie });
}

export const postEdit = async (req, res) => {
  // params에서 얻은 아이디와 body에서 얻은 새 값을 MOVIE DB에 돌리고, /로 돌아가기
  const { id } = req.params;
  const { name, summary, year, rating, genres } = req.body;
  console.log(name, summary, year, rating, genres);

  const amovie = await Movie.findById(id);
  console.log(amovie);

  // amovie obj에 갱신값 추가하고, Movie.XXX(업뎃하는 함수)로 Movie DB에 업뎃하고, /로 리다이렉트  
  await Movie.findByIdAndUpdate(id, {name, summary, year, rating, genres});
  return res.redirect("/");
}


/*
export const deleteVideo = (req, res) => {
  // params에서 얻은 아이디로 MOVIE DB에서 movie 특정하여 삭제하고, /로 돌아가기
}

export const search (req, res) => {
  // params에서 얻은 검색어를 MOVIE DB에 돌려 검색결과 배열을 확보하여, see.pug 하단에 보여주기
}
*/