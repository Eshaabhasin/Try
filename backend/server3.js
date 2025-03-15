import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

// Define User Schema
const UserSchema = new mongoose.Schema({
    name: String,
    age: Number,
});

const User = mongoose.model("User", UserSchema);

// API Route to Save User Data
app.post("/api/users", async (req, res) => {
    try {
        const { name, age } = req.body;
        const newUser = new User({ name, age });
        await newUser.save();
        res.json({ message: "User saved successfully!" });
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
