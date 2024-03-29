import express, { json } from "express";
import { PORT } from "./config.js";
import connectDB from "./db/index.js"
import dotenv from "dotenv"
import cors from "cors"
import cookieParser from "cookie-parser";

const app = express();
const Port = PORT || 3000;

const a = app.use(express.json());

console.log(a);

dotenv.config({
  path: './.env'
})

app.use(cookieParser());
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("./public/temp"))

// const CORS_ORIGIN = '*'
console.log("Before cors");
// app.use(
//   cors({
//     origin: process.env.CORS_ORIGIN,
//     credentials: true,
//   })
// );

app.use(cors({
  origin: 'https://play-tube-iota.vercel.app' || "*" || process.env.CORS_ORIGIN,// Replace with your frontend's origin
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: 'Content-Type,Authorization',
  exposedHeaders: 'Content-Length,Content-Range',
  credentials: true,
  maxAge: 86400, // 1 day
  optionsSuccessStatus: 204,
}));

console.log("After cors");


import userRouter from "./routes/user.routes.js";
app.use("/user",userRouter);
app.get("/", (req, res) => {
  res.send("hello");
});

// routes:- 



connectDB()
.then(()=>{console.log("MONGODB connection successfully completed");})
.catch((err)=>{console.log("Connection err:- ",err);})

app.get("/jokes", (req, res) => {
  const jokes = [
    {
      title: "joke 1",
      content: "Joke 1",
    },
    {
      title: "joke 2",
      content: "Joke 2",
    },
    {
      title: "joke 3",
      content: "Joke 3",
    },
  ];
  res.send(jokes)
});



app.listen(Port, () => {
  console.log(`serve at http://localhost:${Port}`);
});
