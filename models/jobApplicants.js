import mongoose from "mongoose";


const jobApplicantsSchema = mongoose.Schema({

    name: {
        type: String,
        required: true,
        trim: true,
    },
    phone_number: {

        tell_number: {
            type: String,
            required: true,
            trim: true,
        },
        country_code: {
            type: String,
            enum: ['+91', '+1'],
        }
    
    },
    email: {
        type: String,
        required: true,
        trim: true,

    },
    description: {
        type: String,
        required:true

    },
    link: {
        type: String,
        required:true

    },
    file: {
        type: String,
        required:true,
    },
    app_id: {
        type: String,
        required: true,

    },
    job_id: {
        ref: 'jobDetails',
        type:mongoose.Schema.Types.ObjectId,
        required: true,
        trim: true,
    }
    
}, {
    timestamps: true
}

)





export default mongoose.models?.jobApplicants ? mongoose.models.jobApplicants : mongoose.model("jobApplicants", jobApplicantsSchema);
