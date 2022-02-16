const { Schema, model } = require('mongoose')

const userSchema = new Schema({
    userName :{
        type: String,
        required : [true, 'please add user name']
    },

    givenName :{
        type: String,
        required : false
    },

    surName :{
        type: String,
        required : false
    },

    DOB :{
        type: String,
        required: false
    }
}, { timestamps : true})

module.exports = model('User', userSchema)