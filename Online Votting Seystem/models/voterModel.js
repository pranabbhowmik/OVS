import mongoose from "mongoose";

// Define a Mongoose schema for the form data
const voterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    gardain: {
        type: String,
        required: true
    },
    gardain_name: {
        type: String,
        required: true
    },
    voter_id: {
        type: String,
        required: true
    },
    aadhar_id: {
        type: String,
        required: true
    },
    village: {
        type: String,
        required: true
    },
    block: {
        type: String,
        required: true
    },
    Police_station: {
        type: String,
        required: true
    },
    district: {
        type: String,
        required: true
    },
    pin_code: {
        type: String,
        required: true
    },
    booth_no: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true,
        enum: ['male', 'female', 'other'] // You can customize this enum based on your needs
    },
    image: {
        type: String, // You can store image URLs or paths as strings
        required: true
    },
    // You can add more fields as needed
});

// Create a Mongoose model based on the schema
const Voter = mongoose.model('Voter', voterSchema);

export default Voter;
