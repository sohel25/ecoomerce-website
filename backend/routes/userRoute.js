import express from "express";
import User from "../models/userModel.js";
import {getToken} from "../util.js";

const router = express.Router();
router.post("/signin",async(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");

    const siginUser = await User.findOne({
        email:req.body.email,
        password:req.body.password
    });
    if(siginUser){
        res.send({
            _id: siginUser.id,
            name:siginUser.name,
            email:siginUser.email,
            isAdmin:siginUser.isAdmin,
            token: getToken(siginUser)


        })

    }
    else{
        res.status(401).send({msg: "Invalid Email or Password"});
    }
})
router.post("/register",async(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
const user= new User({
    name:req.body.name,
    email:req.body.email,
    password:req.body.password

});
const newUser= await user.save();
if(newUser)
{
    res.send({
        _id: newUser.id,
        name:newUser.name,
        email:newUser.email,
        isAdmin:newUser.isAdmin,
        token: getToken(siginUser)

      

    })

    }
    else{
        res.status(401).send({msg: "Invalid User Data"});
    }
})
router.get("/createadmin",async (req,res)=>{
   try{

    const user = new User({
        name:'sohel',
        email:'sokhan@bestpeers.com',
        password:'1234',
        isAdmin:true,
        token: getToken(siginUser)

    });

    const newUser = await user.save();
    res.send(user);
   } catch(error){
       res.send({msg : error.message})

   } 
})

export default router;