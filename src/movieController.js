import {
  getMovieById,
  getMovies,
  // getMovieByMinimumRating,
  getMovieByMinimumYear
} from "./db";

export const home = (req, res) => {
  // getMovies 함수로 모든 영화를 가져와서, home.pug에 보내주기
  const movies = getMovies();
  return res.render("home", { movies });
};

export const movieDetail = async (req, res) => {
  // home.pug에서 얻은 ID를 /:id에 보내면 movieDetail() 실행하여,
  // getMoviesById로 해당 영화를 가져와서, detail.pug에 보내주기
  const { params: { id } } = req;
  try {
    const movie = await getMovieById(id);
    // console.log(movie.title); // 왜 summary 같은 거 말고 quality, date_uploaded 같은 부가 정보만 오지? -> summary 같은 필요한 정보 잘 옴
    const title = movie.title;
    const year = movie.year;
    const rating = movie.rating;
    const runtime = movie.runtime;
    const genres = movie.genres;
    const summary = movie.summary;
    return res.render("detail", { title, year, rating, runtime, genres, summary }); } catch (err) { // pug 파일에는 title 잘만 출력되는데, 왜 이런 에러가? TypeError: Cannot read property 'title' of undefined
      console.log(err);
    };
};

export const filterMovie = (req, res) => {
  // 1안) getMoviesByMinimumYear로 영화를 가져와서, filteredResult.pug에 보내주기 -> 완료
  // 2안) getMoviesByMinimunYear or getMoviesByMinimumRating으로 영화를 가져와서, filteredResult.pug에 보내주기
  const { params: { year } } = req;
  const filteredMovies = getMovieByMinimumYear(year);
  return res.render("filteredResult", { filteredMovies, pageTitle: "filterMovie By Year" } );
};
