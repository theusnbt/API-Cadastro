import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    email:{
        type: String,
        unique: true,
        lowercase: true,
        required: true
    },
    age:{
        type: Number,
        required: false
    }
});

const user = model('user', userSchema);

export default user;