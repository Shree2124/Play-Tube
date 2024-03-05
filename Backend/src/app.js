import express, { json } from "express"
import cors from "cors"

const app = express()

app.use(json({
    limit: "16kb"
}))

// app.use(cors({
//     origin: "*",
//     credentials: true
// }))

export { app }