const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const router = express.Router();

const Login = require('../models/login.js');

// Use a different name for the model
const notes = mongoose.model("notes", Login.schema);


router.get("/", async(req, res) => {
    
})

router.post("/", (req, res) => {
    // try{
    //     console.log(req.session);
    //     // Search for a document with a "email" field that matches the "username" property of the req.body object
    //     // and a "password" field that matches the "password" property of the req.body object
    //     const logInfo = await notes.find({"email": req.body.email, "password": req.body.password});
    //     if(logInfo.length>0){
    //         req.session.user = logInfo[0].username; 
    //         console.log(req.session);
    //     } else{
    //         console.log("Could not find that user");
    //         console.log(logInfo);
    //     }
    // } catch(err){
    //     res.json({error: err.message});
    // }
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/login',
    })
});


module.exports = router;
