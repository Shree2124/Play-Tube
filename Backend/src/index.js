import { app } from "./app.js";


app.listen(8000,()=>{
    console.log("App is running on http://localhost:8000");
})

app.get("/",(req, res)=>{
    res.send("Hello")
})
app.get("/bo",(req, res)=>{
    res.send("Bo")
})