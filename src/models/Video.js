import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    tags: {
        type: [String],
        required: false
    },
});

const model = mongoose.model("Video", VideoSchema, "VideoA21");

export default model;