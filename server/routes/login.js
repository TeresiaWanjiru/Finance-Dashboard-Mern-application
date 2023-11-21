import express from "express"
const router = express.Router()
import User from "../models/User.js";

router.post("/", async (req,res)=>{
 try {
    const {email,password} = req.body
    User.findOne({email: email})
    .then(user =>{
        if(user){
            if(user.password === password){
                res.json("success")
            }else{
                res.json('the password is incorrect')
            }
        }else {
            res.json('No record exists')
        }
    })
    // res.status(200).json(kpis)
 } catch (error) {
    res.status(404).json({message: error.message})
 }
})


export default router;