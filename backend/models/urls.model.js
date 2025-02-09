import mongoose, { Schema } from "mongoose";

const urlSchema = new Schema({
    url: {
        type: String,
    },
    count: {
        type: Number
    },
    shortId: {
        type: String,
        unique: true
    }
}, {
    timestamps: true
})


export const Url = mongoose.models.url ||  mongoose.model('Url', urlSchema);