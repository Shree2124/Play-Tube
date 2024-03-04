// import mongoose from "mongoose";
// import {DB_NAME} from './constants'
// require('dotenv').config({path: './env'})
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import express from "express";
// import { app } from "./app.js";
const app = express();




dotenv.config({
    path: "./.env",
});

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () =>
    console.log(`Server is running at port : ${process.env.PORT}`)
    );
})
.catch((error) =>
console.log("MONGODB CONNECTION ERROR in index.js: ", error)
);

app.get("/", (req, res)=>{
    res.send("Hello")
})
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);



/*
// TODO: ⁡⁢⁢⁢first approch to connect db
import express  from "express";
const app = express()
⁡
(async ()=> {
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        app.on("error", ()=>{
            console.log("ERROR: ", error);
            throw error
        })
        app.listen(process.env.PORT, ()=>{
            console.log(`APP is listenign on port ${process.env.PORT}`);
        })
    } catch (error) {
        console.error("ERROR: ",error)
        throw error
    }
})()
*/
