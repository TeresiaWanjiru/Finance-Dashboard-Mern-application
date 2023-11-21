import express from "express"
const router = express.Router()
import User from "../models/User.js";

router.post("/", async (req,res)=>{
 try {
    User.create(req.body).then(users => res.json(users))
    // res.status(200).json(kpis)
 } catch (error) {
    res.status(404).json({message: error.message})
 }
})


export default router;