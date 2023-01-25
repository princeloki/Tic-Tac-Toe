const express = require('express');
const res = require('express/lib/response');
const mongoose = require('mongoose');
const path = require('path');
const session = require("express-session");

const router = express.Router();
const Register = require('../models/Register.js');

const Note = mongoose.model("Note", Register.schema);

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname,"..","Client","register.html"));
});

router.post("/", async(req, res) => {
    try{
        console.log(req.session);
        const newNote = new Note({
            "email": req.body.email,
            "username": req.body.username,
            "password": req.body.password
        });
        await newNote.save();
        res.redirect("/login");
    } catch(err){
        res.json({error: err.message});
    }
})

module.exports = router;

