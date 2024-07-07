import express from 'express'
import routes from './routes/index.mjs'
import { PORT } from './config/constants.mjs'
import session from 'express-session'
const app = express()

app.use(express.json())

app.use(session({
    secret: "dev sambo",
    saveUninitialized: false,
    resave: false,
    cookie:{
        maxAge: 60000 * 60 * 2
    }
}))

app.use(routes)
app.all("*", (req, res)=>{
    res.status(404).send("<h1> Page not Found </h1>")
 })
 
 app.listen(PORT , ()=>{
    console.log(`running in port: http://localhost:${PORT}`)
 })