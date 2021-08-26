import mongoose from "mongoose";

const Schema = mongoose.Schema;

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
    owner: {
        type: Schema.Types.ObjectId, 
        ref: 'User',
    }
});

const model = mongoose.model("Video", VideoSchema, "VideoA21");

export default model;