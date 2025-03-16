import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { GoogleGenerativeAI } from '@google/generative-ai';

dotenv.config(); // Load environment variables

const app = express();
const port = 5001;

// Initialize Gemini API with secure API key
const genAI = new GoogleGenerativeAI("AIzaSyBHBovnMnVte6fOiONYQB64svJ3R8WBNdw");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

app.use(cors());
app.use(express.json());

// Simple response trimming function
const trimResponse = (message) => {
  return message ? message.trim() : '';
};

app.post('/api/learn', async (req, res) => {
  const userMessage = req.body.message;

  if (!userMessage) {
    return res.status(400).json({ error: 'Message is required.' });
  }

  try {
    // Generate content using Gemini
    const result = await model.generateContent(userMessage);
    const response = await result.response;  // Await the response object
    const text = response.candidates[0].content.parts[0].text; // Correct way to access text

    return res.status(200).json({ message: trimResponse(text) });
  } catch (error) {
    console.error("Error in chat request:", error);

    return res.status(500).json({
      error: `Internal Server Error: ${error.message}`,
      details: error.response?.data || 'No details available',
    });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
