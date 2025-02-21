import mongoose from "mongoose";

const counterSchema = new mongoose.Schema({
    model: { 
        type: String, 
        required: true, 
        unique: true 
    }, // Nome do modelo (ex: "UserModel")
    count: { 
        type: Number, 
        default: 0 
    }, // Último número gerado
    createdAt: {
        type: Date,
        default: Date.now
    } 
});

const Counter = mongoose.model("Counter", counterSchema);
export default Counter;
