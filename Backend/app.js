const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');
const crypto = require('crypto');
// const passport = require('passport');
// const passport_config = require('./passport-config')
const secret = crypto.randomBytes(32).toString('hex');
const flash = require('express-flash');
const Register = require('./models/Register.js');
const Note = mongoose.model("Note", Register.schema);

require('dotenv/config');


const app = express();

const registerRoute = require("./routes/register.js");
// const loginRoute = require("./routes/login.js");
// const userRoute = require("./routes/u-index.js");


// for parsing application/json
app.use(bodyParser.json()); 

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true })); 

// for parsing multipart/form-data
app.use(express.static("Client"));

app.use(flash());
app.use(session({
    secret: secret,
    resave: false,
    saveUninitialized: false
  }));

// app.use(passport.initialize());
// app.use(passport.session());

app.get('/', (req, res) => {
    if(req.session.user){   
        res.redirect('/u-index');
    }else{
        res.sendFile(path.join(__dirname, 'Client','index.html'));
    }
})

app.get('/u-index', (req, res) => {
    res.sendFile(path.join(__dirname, 'Client','u-index.html'));
})

app.get('/leaderboard', (req, res) => {
    if(req.session.user){
        res.sendFile(path.join(__dirname, 'Client', 'leaderboard.html'));
    } else{
        res.redirect('/login');
    }
});

// Pass the session middleware to the login route
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname,"Client","login.html"));
})

app.post('/login', async (req, res) => {
    try{
        const user = await Note.findOne({email: req.body.email});
        if(!user){
            res.redirect('/login');
        } 
    
        if(user.password === req.body.password){
            req.session.user = user;
            res.redirect('/u-index.html');
        } else{
            req.flash("error", "Password is incorrect");
        }
    } catch (err) {
        req.flash("error", "User not found");
    }
})

// Pass the session middleware to the register route
app.use('/register', registerRoute);

app.get('/logout', (req, res) => {
    req.session.destroy((err)=> {
        if(err){
            console.log(err);
        } else {
            res.redirect('/');
        }
    });
});

mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('Connected to the database');
        }
    }
);


app.listen(3000);

