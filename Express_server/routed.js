const express = require("express");
const router = express.Router();

router.get("/",(req,res)=>{
    res.send("hello im the home page router");
})


router.get("/contact",(req,res)=>{
    res.send("hello im the contact page router");
})


router.get("/about",(req,res)=>{
    res.send("hello im the about page router");
})

module.exports = router;