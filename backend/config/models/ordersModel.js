import mongoose from "mongoose";
import generateSequentialId from "./generateSequentialIdModel";
const gSId = generateSequentialId;

const orderSchema = new mongoose.Schema({
    orderId: {
        type: Number,
        unique: true,
        default: generateSequentialId
    },
    userId: {
        type: mongoose.Schema.Types.Number,
        unique: true,
        ref: "UserId"
    },
    date: {
        type: Date,

    },
    status: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

orderSchema.pre("save", gSId);
orderSchema.idField = "ordersId";

export default mongoose.model("Orders", orderSchema);