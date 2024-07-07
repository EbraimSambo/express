const express = require("express")
const app = express()
const path = require("path")
const users = require("./app/db/users")

const morgan  = require("morgan")

app.use([morgan("tiny"), express.static("./public")])

// app.get("/", (req, res) => {

//     res.redirect("/home")
// })
// app.get("/home", (req, res) => {

//     res.status(200).sendFile(path.resolve(__dirname, "./views/index.html"))
// })
// app.get("/about", (req, res) => {
//     res.status(200).send("<h1> About Page  </h1>")
// })
app.get("/api/users", (req, res) => {
    console.log(req.user)
    res.json({ users })
})
app.get("/api/users/:id", (req, res) => {
    const { id } = req.params
    console.log(req.query)
    const user = users.users.find(user => user.id === Number(id))
    if (!user) {
        res.json({ message: "usuario nao encontrado" }).status(404)
    }
    console.log(id)
    res.json({ user }).status(200)
})

app.get("/api/search", (req, res) => {
    const { query } = req.query
    let sortUsers = [...users.users]
    if (query) {
        sortUsers = sortUsers.filter((user) => {
            return user.name.startsWith(query)
        })
    }

    if (sortUsers.length < 1) {
        res.json("Usuario não encontrado")
    }
    res.json(sortUsers)
})

app.all("*",(req, res) => {
    res.status(404).send("<h1>Page not foun</h1>")
})
app.listen(5000, () => {
    console.log("server in http://localhost:5000")
})