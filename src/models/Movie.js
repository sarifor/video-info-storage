import mongoose from "mongoose";

const MovieSchema = new mongoose.Schema({
  name: String,
  summary: String,
  year: Number,
  rating: Number,
  genres: {
    type: [String],
    required: true,
  }
});

const Movie = mongoose.model("Movie", MovieSchema, "younghwa");

export default Movie;
