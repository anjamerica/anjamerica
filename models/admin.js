import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({

    email: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
}, {
    timestamps: true
})

export default mongoose.models?.admins ? mongoose.models.admins : mongoose.model("admins", adminSchema);