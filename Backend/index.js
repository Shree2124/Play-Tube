import express, { json } from "express";
import { PORT } from "./config.js";
import connectDB from "./db/index.js"
import dotenv from "dotenv"
import cors from "cors"

const app = express();
const Port = PORT || 3000;

app.use(express.json());

dotenv.config({
  path: './.env'
})

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
  origin: ["https://play-tube-iota.vercel.app"],
  methods: ["POST", "GET", "PUT", "DELETE"],
  credentials: true
}));

console.log("After cors");



app.get("/", (req, res) => {
  res.send("hello");
});

// routes:- 

import userRouter from "./routes/user.routes.js";
app.use("/user/register",userRouter);

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


export {app}