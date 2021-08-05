import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true
    },
    name: String,
    password: String,
});

const model = mongoose.model("User", UserSchema, "User");

export default model;
