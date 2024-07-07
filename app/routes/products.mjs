import { Router } from "express";

const router = Router()

router.get("/products", (req, res)=>{
    console.log(req.headers.cookie)
    console.log(req.cookies)
    console.log(req.signedCookies)
    res.send({products: "sambo"})
})


export default router