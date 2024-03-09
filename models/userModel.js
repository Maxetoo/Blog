const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');


const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Please input username'],
        minLength: 4,
        maxLength: 11,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: [true, 'Please input password'],
        minLength: 6,
        maxLength: 20,
    },
    email: {
        type: String,
        required: [true, 'Please input email'],
        validator: {
            validate: validator.isEmail,
            message: (props) => `${props.value} is not a valid email`
        },
        unique: true
    },
    role: {
        type: String,
        default: 'user',
        enum: ['user', 'admin']
    }
})


UserSchema.pre('save', async function () {
    if (!this.isModified('password')) return
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt)
});


UserSchema.methods.comparePassword = async function (password) {
    const checkPassword = await bcrypt.compare(password, this.password)
    return checkPassword 
}


module.exports = mongoose.model('User', UserSchema);