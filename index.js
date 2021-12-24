const express = require("express")
const app  = express()
app.set("view engine", "ejs")

app.listen(5000, () => {console.log("server qchu ishlovotti")})

app.get("/", (req, res, next)=>{
    res.render("index", {title: "Abduqahhor"})
})

