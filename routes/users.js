const express = require("express")
const router = express.Router()

router.use(middleLogger)

router.route("/:id")
.get((req, res) => {
    console.log(req.user)
    res.send(`Create user ID: ${req.params.id}`)
})
.put((req, res) => {
    res.send("post")
})
.delete((req, res) => {
    res.send("put")
})
.post((req, res) => {
    res.send("delete")
})

const users = [{name: "Abduqahhor"}, {name: "Doniyorbek"}]

router.param("id", (req, res, next, id)=> {
    req.user = users[id]
    next()
})

function middleLogger(req, res, next){
    console.log(req.originalUrl)
    next()
}

module.exports = router