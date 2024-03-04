import express, { json } from "express";
// import mongoose from "mongoose";
// import { PORT, PROJECT_ID } from "./config.js";
// import { Book } from "./models/books.models.js";
// import booksRoutes from './routes/books.routes.js'
import connectDB from "./db/index.js"
import router from "./routes/user.routes.js"
import cors from "cors"


const app = express();
// const Port = PORT || 3000;

app.use(express.json());
// app.use(cors({
//   origin: "http://localhost:5173",
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   allowedHeaders: ['Contenet-Type'],
// }));

// app.use(cors());

app.use(cors({
  origin: ['https://book-store-frontend-rho-two.vercel.app','http://localhost:5173',"*"],
  methods: ["POST", "GET", "PUT", "DELETE"],
  credentials: true
}))
// app.use('/users',router);

app.get("/", (req, res) => {
  res.send("hello");
});


app.listen(process.env.PORT, () => {
  console.log(`serve at http://localhost:${process.env.PORT}`);
});

connectDB()
