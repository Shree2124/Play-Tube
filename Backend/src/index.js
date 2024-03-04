import connectDB from "./db/index.js"
import express, { json } from "express"
import dotenv from "dotenv"

const app = express()


dotenv.config({
    path: './.env'
})

connectDB()
.then(()=>{
    console.log("Successfully db connected");
})
.catch((error)=>console.log("DB connection error:- ",error));

app.use(json())


app.get("/",(req, res)=>{
    res.send("hello")
})

app.listen(process.env.PORT,()=>{
    console.log("Server is running on http://localhost:8000");
})