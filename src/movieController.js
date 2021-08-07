import {
  getMovieById,
  getMovies,
  getMovieByMinimumRating,
  getMovieByMinimumYear
} from "./db";

export const home = (req, res) => {
  // getMovies 함수로 모든 영화를 가져와서, home.pug에 보내주기
  const movies = getMovies();
  return res.render("home", { movies });
};

export const movieDetail = (req, res) => {
  // home.pug에서 얻은 ID를 /:id에 보내면 movieDetail() 실행하여,
  // getMoviesById로 해당 영화를 가져와서, detail.pug에 보내주기
  const { params: { id } } = req;
  const movie = getMovieById(id);
  console.log(movie); // 왜 summary 같은 거 말고 quality, date_uploaded 같은 부가 정보만 오지?
  return res.render("detail", { movie });
};

export const filterMovie = (req, res) => {
  // 1안) getMoviesByMinimumYear로 영화를 가져와서, filteredResult.pug에 보내주기 -> 완료
  // 2안) getMoviesByMinimunYear or getMoviesByMinimumRating으로 영화를 가져와서, filteredResult.pug에 보내주기
  const { params: { year } } = req;
  const filteredMovies = getMovieByMinimumYear(year);
  return res.render("filteredResult", { filteredMovies, pageTitle: "filterMovie By Year" } );
};
