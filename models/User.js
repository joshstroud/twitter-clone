const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    // chats: [{
    //     type: mongoose.ObjectId,
    //     ref: "Chat"
    // }]
});

UserSchema.plug(passportLocalMongoose);
const User = mongoose.model('user', UserSchema);