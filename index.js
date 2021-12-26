const express = require("express")
const app  = express()
const userRouter = require("./routes/users.js")
app.use(express.static("public"))

app.set("view engine", "ejs")

app.listen(5000, () => {console.log("server qchu ishlovotti")})

app.get("/", (req, res, next)=>{
    res.render("index", {title: "salom"})
})
app.use("/users", userRouter)

