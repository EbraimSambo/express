const authorize =(req, res, next)=> {
    const {user} = req.query
    console.log(user)
    if(user === "sambo"){
        req.user = {name: "sambo", id: 1}
      return  next()
    }{
        res.status(401).send("<h1>Não autorizado</h1>")
    }
}

module.exports = authorize