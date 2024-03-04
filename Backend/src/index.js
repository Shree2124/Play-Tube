// import mongoose from "mongoose";
// import {DB_NAME} from './constants'
// require('dotenv').config({path: './env'})
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import express from "express";
import cors from "cors"
// import { app } from "./app.js";
const app = express();




dotenv.config({
    path: "./.env",
});


app.use(
    cors({
    origin: process.env.CORS_ORIGIN,
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true,
})
);

import userRouter from "./routes/user.routes.js";

// routes declaration
app.use("/api/v1/users", userRouter);
// url: -http://localhost:8000/api/v1/users/${route}

app.get("/",(req, res)=>{
    res.send("Hello")
})

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () =>
    console.log(`Server is running at port : ${process.env.PORT}`)
    );
})
.catch((error) =>
console.log("MONGODB CONNECTION ERROR in index.js: ", error)
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
