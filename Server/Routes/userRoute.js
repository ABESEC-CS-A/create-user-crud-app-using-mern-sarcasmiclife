const express=require("express");
const router=express.Router();
const usercontroller=require("../controller/userController")
router.get("/users",usercontroller.getUsers);
module.exports=router;