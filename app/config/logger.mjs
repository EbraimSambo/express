export const logger = (req, res, next) =>{
    console.log(`method: ${req.method}`)
    console.log(`route: ${req.url}`)
    next()
  }