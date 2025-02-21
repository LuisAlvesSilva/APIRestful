import mongoose from "mongoose";
import generateSequentialId from "./generateSequentialIdModel";
const gSId = generateSequentialId;

const orderItemSchema = new mongoose.Schema({
    ordersItemsId: {
        type: Number,
        unique: true,
        default: generateSequentialId
    },
    orderId: {
        type: mongoose.Schema.Types.Number,
        unique: true,
        ref: "OrderId"
    },
    productId: {
        type: mongoose.Schema.Types.Number,
        unique: true,
        ref: "ItemsId"
    },
    quantity: {
        type: Number,
        required: true
    }, 
    unit_price:{
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

orderItemSchema.pre("save", gSId);
orderItemSchema.idField = "ordersId";

export default mongoose.model("Orders_Items", orderItemSchema);