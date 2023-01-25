const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const Register = require('./models/Register.js');
const bcrypt = require('bcrypt');
const passport = require('passport');
const Note = mongoose.model('Note', Register.schema);

const authenticateUser = (email, password, done) =>{
    const user = Note.findOne({email: email}).then((user) =>{
        if(user== null){
            return done(null, false, {message: "no user"})
        }
        try{
            if(password===user.password){
                return done(null, user)
            } else{
                return done(null, false, {message: "Password incorrect"});
            }
        } catch(e) {
            return done(e);
        }
    })
}

passport.use(new LocalStrategy({emailField: 'email'}, authenticateUser));
passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser((id, done) => { 
    Note.findById(id, function (err, user) {
        return done(err, user);
    });
});
