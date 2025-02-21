import mongoose from "mongoose";
import generateSequentialId from "./generateSequentialIdModel";
const gSId = generateSequentialId;

const itemSchema = new mongoose.Schema({
    itemsId : {
        type: Number,
        unique: true,
        default: generateSequentialId
    },
    product_name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    price: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    category_id: {
        type: mongoose.Schema.Types.Number,
        required: true,
        ref: "Categories"
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

itemSchema.pre("save", gSId);
itemSchema.idField = "itemId";

export default mongoose.model('item', itemSchema);