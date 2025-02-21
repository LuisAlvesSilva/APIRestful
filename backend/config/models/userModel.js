import mongoose from "mongoose";
import generateSequentialId from "./generateSequentialIdModel";
const gSId = generateSequentialId;

const userSchema = new mongoose.Schema({
    userId: {
        type: Number,
        unique: true,
        default: generateSequentialId
    },
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ // Regex para validar e-mails
    },
    password: {
        type: String,
        required: true
    },
    tel: {
        type: String,
        required: true,
        match: /^\+?(\d{1,3})?(\d{10,15})$/  // Regex para validação de telefone
    },
    address: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

userSchema.pre("save", gSId);
userSchema.idField = "userId";

export default mongoose.model('User', userSchema);