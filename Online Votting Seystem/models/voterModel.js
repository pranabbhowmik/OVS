import mongoose from "mongoose";
import bcrypt from "bcryptjs";

// Define a Mongoose schema for the form data
const voterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  gardain: {
    type: String,
    required: true,
  },
  gardain_name: {
    type: String,
    required: true,
  },
  voter_id: {
    type: String,
    required: true,
  },
  aadhar_id: {
    type: String,
    required: true,
  },
  village: {
    type: String,
    required: true,
  },
  block: {
    type: String,
    required: true,
  },
  Police_station: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  pin_code: {
    type: String,
    required: true,
  },
  booth_no: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
    enum: ["male", "female", "other"], // You can customize this enum based on your needs
  },
  image: {
    type: String, // You can store image URLs or paths as strings
    required: true,
  },
  // You can add more fields as needed
});

// passwoed hash
voterSchema.pre("save", async function (next) {
  const vote = this;
  if (!vote.isModified("aadhar_id")) {
    return next();
  }
  try {
    const salt = await bcrypt.genSalt(10);
    const hashaadharid = await bcrypt.hash(vote.aadhar_id, salt);
    vote.aadhar_id = hashaadharid;
  } catch (error) {
    console.log("candidate name is not modified", error);
  }
});
// compate that the addhar & voder id is corret or not
// voterSchema.methods.isVoteridCorrect = async function (voter_id) {
//   return await bcrypt.compare(voter_id, this.voter_id);
// };
// voterSchema.methods.isAddharidCorrect = async function (aadhar_id) {
//   return await bcrypt.compare(aadhar_id, this.aadhar_id);
// };
// Create a Mongoose model based on the schema
const Voter = mongoose.model("Voter", voterSchema);

export default Voter;
