import mongoose from "mongoose";

const UserSchema = mongoose.Schema({});
const model = mongoose.model("User", UserSchema, "User");

export default model;
