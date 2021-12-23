const express = require("express")
const app  = express()

app.listen(5000, () => {console.log("server qchu ishlovotti")})

app.get("/", ()=>{console.log("kaka")})