const path = require('path');
const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    email:{
        type: 'String',
        required: true,
    },
    username:{
        type: 'String',
        required: true,
    },
    password:{
        type: 'String',
        required: true,
    },
});

module.exports = mongoose.model('Register', postSchema);

