import {
  getMovieById,
  getMovies,
  getMovieByMinimumRating,
  getMovieByMinimumYear
} from "./db";

export const home = (req, res) => {
  // getMovies 함수로 모든 영화를 가져와서, home.pug에 보내주기
  const movies = getMovies();
  console.log(movies);
  return res.render("home", { movies });
};

export const movieDetail = (req, res) => {
  // getMoviesById로 해당 영화를 가져와서, detail.pug에 보내주기
};

export const filterMovie = (req, res) => {
  // getMoviesByMinimumRating 등으로 영화를 가져와서, xxx.pug에 보내주기
};
