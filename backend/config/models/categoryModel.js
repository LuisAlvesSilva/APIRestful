import mongoose from "mongoose";
import generateSequentialId from "./generateSequentialIdModel";
const gSId = generateSequentialId;

const categorySchema = new mongoose.Schema({
    categoryId: {
        type: Number,
        unique: true,
        default: generateSequentialId
    },
    name: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

categorySchema.pre("save", gSId);
categorySchema.idField = "categoryId";

export default mongoose.model('category', categorySchema)