import mongoose from "mongoose";

const voteSchema = new mongoose.Schema({
    voter_id: {
        type: String,
        require: true
    },
    adhaar_id: {
        type: String,
        require: true
    },
    voter_name: {
        type: String,
        require: true
    },
    candidate_name: {
        type: String,
        require: true
    },
})

const voteModel = mongoose.model('vote', voteSchema)

export default voteModel