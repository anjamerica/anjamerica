import mongoose from "mongoose";

const jobDetailsSchema = mongoose.Schema({

    job_id: {
        type: String,
        required: true,
        trim: true,

    },
    ref_id: {
        type: String,
        required: true,
        trim: true

    },
    job_title: {
        type: String,
        required: true,

    },
    description: {
        type: String

    },
    image: {
        file_name:{
            type: String
        },
        file_location:{
        type: String
        },
        file_key:{
        type: String
        },
        file_size:{
            type: Number
            },
        file_mimetype:{
                type: String
                }
        },
    is_active: {
        type: Boolean,
        default:true
    },
    job_location: {
        country: {
            type: String
        },
        state: {
            type: String
        },
        city: {
            type: String
        },
    
    },
    job_type: {
        type: String,
        required: true,
        enum: ['Contract', 'Direct'],
    },
    vendor_rate:{

        vendor_rate: {
            type: Number,
            required: true,
        },
        currency: {
            type: String,
            required: true,
        }
    } ,
    client_rate: {


        client_rate: {
            type: Number,
            required: true,
        },
        currency: {
            type: String,
            required: true,
        }
    
    },
    posting_date: {
        type: Date,
        default: Date.now
    },
    qualifications: {
        type: Array,
    },
    license_certification: {
        type: Array
    },
    key_responsiblities: {
        type: Array
    },
    training_details: {

        training_duration: {
            type: String,
            required: true,
        },
        training_fee: {
            training_fee: {
                type: String,
                required: true,
            },
            currency: {
                type: String,
                required: true,
            },
        },
        training_type: {
            type: String,
            required: true,
            enum: ['Provided','Not Provided']
        }
    
    },
}, {
    timestamps: true
}

)



export default mongoose.models?.jobDetails ? mongoose.models.jobDetails : mongoose.model("jobDetails", jobDetailsSchema);

