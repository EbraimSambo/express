import { Router } from "express"
import { logger } from "../config/logger.mjs"
import userRouter from './users.mjs'
import homeRouter from './home.mjs'
import productsRouter from './products.mjs'

const router= Router()

router.use(homeRouter, userRouter,productsRouter)
router.use(logger,(req,res,next)=>{
    console.log(`finish session`)
    next()
})



export default router;