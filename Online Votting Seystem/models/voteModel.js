import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const voteSchema = new mongoose.Schema({
  voter_id: {
    type: String,
    require: true,
  },
  adhaar_id: {
    type: String,
    require: true,
  },
  voter_name: {
    type: String,
    require: true,
  },
  candidate_name: {
    type: String,
    require: true,
  },
});

voteSchema.pre("save", async function (next) {
  const vote = this;
  if (!vote.isModified("candidate_name")) {
    return next();
  }
  try {
    const salt = await bcrypt.genSalt(10);
    const hashCandidate = await bcrypt.hash(vote.candidate_name, salt);
    vote.candidate_name = hashCandidate;
  } catch (error) {
    console.log("candidate name is not modified", error);
  }
});

const voteModel = mongoose.model("vote", voteSchema);

export default voteModel;
