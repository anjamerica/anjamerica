import mongoose from "mongoose";

const subscribersSchma = new mongoose.Schema({

    email: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true
    },
}, {
    timestamps: true
})

export default mongoose.models?.subscribers ? mongoose.models.subscribers : mongoose.model("subscribers", subscribersSchma);