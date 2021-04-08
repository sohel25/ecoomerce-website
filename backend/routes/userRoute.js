import express from "express";
import User from "../models/userModel.js";
import {getToken, isAdmin, isAuth} from "../util.js";

const router = express.Router();

router.put('/:id', async (req, res) => {
    const userId = req.params.id;
    const user = await User.findById(userId);
    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      user.password = req.body.password || user.password;
      const updatedUser = await user.save();
      res.send({
        _id: updatedUser.id,
        name: updatedUser.name,
        email: updatedUser.email,
        isAdmin: updatedUser.isAdmin,
        token: getToken(updatedUser),
      });
    } else {
      res.status(404).send({ message: 'User Not Found' });
    }
  });
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
        token: getToken(newUser)

      

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
       

    });

    const newUser = await user.save();
    res.send(user);
   } catch(error){
       res.send({msg : error.message})

   } 
})

export default router;