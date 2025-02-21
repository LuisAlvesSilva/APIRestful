import mongoose from "mongoose";
import generateSequentialId from "./generateSequentialIdModel";
const gSId = generateSequentialId;

const paymentsSchema = new mongoose.Schema({
    paymentsId: {
        type: Number,
        unique: true,
        default: generateSequentialId
    },
    orderId: {
        type: Number,
        unique: true,
        ref: "OrderId"
    },
    method: {
        type: String,
        required: true
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

paymentsSchema.pre("save", gSId);
paymentsSchema.idField = "paymentsId";

export default mongoose.model("Payments", paymentsSchema);