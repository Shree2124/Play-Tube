import express, { json } from "express";
import { PORT } from "./config.js";
import cors from "cors"

const app = express();
const Port = PORT || 3000;

app.use(express.json());

app.use(cors({
  origin: "https://play-tube-iota.vercel.app",
  methods: ["GET","PUT","DELETE","UPDATE","PATCH"],
  credentials: true
}))

app.get("/", (req, res) => {
  res.send("hello");
});

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
