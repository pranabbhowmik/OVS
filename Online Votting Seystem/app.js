import express from "express";
import mongoose from "mongoose";
import fileUpload from "express-fileupload";
import Voter from "./models/voterModel.js";
import cloudinary from "cloudinary";
import vote from "./models/voteModel.js";
import bcrypt from "bcryptjs";

import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname("https://online-votting-system.onrender.com/");

const app = express();

// mongoDB Connection
const mongoURI =
  "mongodb+srv://Pranabbhowmik:Pranab123@cluster0.pwhfbbg.mongodb.net/online-voting-system";

const connectToMongo = async () => {
  const res = await mongoose.connect(mongoURI);
  if (res) {
    console.log("connected successfully");
  }
};

cloudinary.v2.config({
  cloud_name: "drwih82cq",
  api_key: "712644529267394",
  api_secret: "W49HVXtGDJ-h8LDC1swvCqSZ7Bg",
});

connectToMongo();

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/newvoter.html");
});

app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/public/login.html");
});
app.get("/image", (req, res) => {
  res.sendFile(__dirname + "/public/image.html");
});

app.get("/success", (req, res) => {
  res.sendFile(__dirname + "/public/succes.html");
});
app.get("/vote", (req, res) => {
  res.sendFile(__dirname + "/public/vote.html");
});

app.post("/", async (req, res) => {
  // Access the form data from req.body
  const formData = req.body;
  const file = req.files.image;
  const upload = await cloudinary.v2.uploader.upload(file.tempFilePath);

  const newVoterData = formData;
  newVoterData.image = upload.url;
  const newVoter = new Voter(newVoterData);
  console.log(formData, req.files);
  newVoter
    .save()
    .then(() => {
      console.log("Voter data saved successfully");
    })
    .catch((err) => {
      console.error("Error saving voter data:", err);
    });

  // Process and handle the form data as needed
  // For example, you can save it to a database or perform other actions

  // Respond with a success message
  res.json({ message: "Data received successfully" });
});

app.post("/login", async (req, res) => {
  const formData = req.body;
  console.log(formData);
  const { voter, aadhar } = req.body;
  // Now, formData contains the data sent from the frontend
  // Process the data and send a response back to the frontend
  try {
    const candidate = await Voter.findOne({
      voter_id: voter,
    });
    const hashaddhardid = await bcrypt.compare(aadhar, candidate.aadhar_id);
    if (hashaddhardid) {
      // Candidate found, they are valid
      res.json({ valid: true, candidate });
      console.log("Valid Candidate");
    } else {
      // Candidate not found, they are not valid

      res.json({ valid: false });
    }
    // if (candidate.voter_id === voter && candidate.aadhar_id === aadhar) {

    //   res.json({ valid: true, candidate });
    //   console.log("Valid Candidate");
    // }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});
app.post("/vote", async (req, res) => {
  try {
    console.log("request incoming");
    const { adhaar_id, voter_id, voter_name, candidate_name } = req.body;
    // if vote is already given
    const check = await vote.findOne({ adhaar_id, voter_id });
    if (check) {
      return res
        .status(401)
        .json({ error: true, message: "vote is already given by voter" });
    }
    const newVote = await vote.create({
      adhaar_id,
      voter_id,
      candidate_name,
      voter_name,
    });
    res.json({ error: false, message: "thank you for vote" });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ error: true, message: "internal server error" });
  }
});

app.listen(3000, () => {
  console.log("Server is running....");
});
