import mongoose, { Schema } from "mongoose";


const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    urls: {
        type: Schema.Types.ObjectId,
        ref: "Url"
    }
}, {
    timestamps: true
})

export const User = mongoose.model("User", userSchema)