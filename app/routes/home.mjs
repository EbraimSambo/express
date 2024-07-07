import { Router } from "express";

const router = Router()

router.get("/", (req, res)=>{
        console.log(req.session)
        console.log(req.sessionID)
        // console.log(req.sessionStore)
    res.send("Home")
})

export default router;