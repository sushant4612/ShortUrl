import mongoose, { Schema } from "mongoose";

const urlSchema = new Schema({
    url: {
        type: String,
    },
    shortId: {
        type: String,
        unique: true
    }
}, {
    timestamps: true
})

export const Url = mongoose.model('Url', urlSchema);