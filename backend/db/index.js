import mongoose from "mongoose";

export const connectDb = async () => {
    try {
        await mongoose.connect(`${process.env.DB_URL}/shortUrl`)
        console.log('Database Connection');
    } catch (error) {
        console.log("Mongodb Connection error: ", error);
    }
}