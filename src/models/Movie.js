import mongoose from "mongoose";

const MovieSchema = new mongoose.Schema({
  name: String,
  summary: String,
  year: Number,
  rating: Number,
  genres: String,
});

const Movie = mongoose.model("Movie", MovieSchema);

export default Movie;
