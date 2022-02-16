const mongoose = require("mongoose")

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            require: true,
            minimum: 1,
            max: 20,
            unique: true
        },
        email: {
            type: String,
            required: true,
            max: 50,
            unique: true
        },
        password: {
            type: String,
            require: true,
            min: 10
        },
        profilePicture: {
            type: String,
            default: ""
        },
        followers: {
            type: Array,
            default: []
        },
        following: {
            type: Array,
            default: []
        },
        admin: {
            type: Boolean,
            default: false
        },
        desc: {
            type: String,
            max: 50
        },
        city: {
            type: String,
            max: 50
        },
        state: {
            type: String,
            max: 50
        }
    },
    {timestamps: true}
)

module.exports = mongoose.model('User', userSchema);
