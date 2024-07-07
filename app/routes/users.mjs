import {Router} from 'express'
import {query, validationResult, body, matchedData, checkSchema} from 'express-validator'
import { createValidatorSchema } from '../utils/validationSchema.mjs'
import { authorize } from '../middlewares/authorize.mjs'

const router = Router()


router.post("/users", checkSchema(createValidatorSchema),(req, res)=>{
    const data = matchedData(req)
    console.log(data)
    const result = validationResult(req)
    console.log(result)
    if(!result.isEmpty()){
        return res.status(400).send({error: result.array()})
    }
    res.status(200).send("<h1>Hello Express</h1>")
})


router.get("/users",
    //  query("filter").isString().notEmpty().withMessage("Tens de inserir carateres").isLength({min: 3, max: 6}).withMessage("falta de cararecteres, min 6, max6"),
     (req, res)=>{
//  const result = validationResult(req)
    console.log(req.session.id)
    console.log(req.session)
    res.status(200).send("<h1>Hello Express</h1>")
})

router.get("/users/:slug", authorize,(req, res)=>{
    const {slug} = req.params
   
    res.status(200).send(`<h1>${slug}</h1> `)
})

export default router;