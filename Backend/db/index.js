import mongoose from "mongoose"
import { DB_NAME } from "../config.js";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL.toString()}/${DB_NAME}`)
    } catch (error) {
        console.log("db::index.js::connectDB(), MONGODB connection error:- ",error);
    }
}

export default connectDB