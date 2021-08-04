import Movie from "./models/Movie";

export const seeAllMovies = async (req, res) => {
    // Movie DB의 모든 값을 allMovies 오브젝트에 담아서, see.pug에 보내기
    const allMovies = await Movie.find({});
    // await Movie.create( { name: "Marina", summary: "ESPA", year: 2011, rating: 5, genres: "Music" } );
    // console.log(allMovies);
    return res.render("see", { pageTitle: "seeAllMovies", allMovies });
};


export const getUpload = (req, res) => {
    return res.render("upload", { pageTitle: "getUpload" });
}


export const postUpload = async (req, res) => {
  const {name, summary, year, rating, genres} = req.body;
  // console.log(name, summary, year, rating, genres);
  await Movie.create({
      name, 
      summary, 
      year, 
      rating, 
      genres});
  return res.redirect("/");
}

/*
export const getEdit = (req, res) => {
  //params에서 얻은 아이디를 MOVIE DB에 돌려 movie obj 확보하여, videoEdit.pug로 보내기
}

export const postEdit = (req, res) => {
  //params에서 얻은 아이디와 body에서 얻은 새 값을 MOVIE DB에 돌리고, /로 돌아가기

}

export const watch = (req, res) => {
  //params에서 얻은 아이디를 MOVIE DB에 돌려 movie obj 확보하여, watch.pug로 보내기
}

export const deleteVideo = (req, res) => {
  //params에서 얻은 아이디로 MOVIE DB에서 movie 특정하여 삭제하고, /로 돌아가기
}

export const search (req, res) => {
  //params에서 얻은 검색어를 MOVIE DB에 돌려 검색결과 배열을 확보하여, see.pug 하단에 보여주기
}
*/