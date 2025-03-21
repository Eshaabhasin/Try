import express from "express";
import cors from "cors";
import { GoogleGenerativeAI } from "@google/generative-ai";

const app = express();
const port = process.env.PORT || 5001; // Use dynamic port for Render

// Use environment variables for API keys (Avoid hardcoding!)
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

app.use(cors());
app.use(express.json());

// Function to clean up responses
const trimResponse = (message) => {
  return message ? message.trim() : "I couldn't generate a response.";
};

// Chatbot endpoint
app.post("/chat", async (req, res) => {
  const userMessage = req.body.message;

  if (!userMessage) {
    return res.status(400).json({ error: "Message is required." });
  }

  try {
    const result = await model.generateContent(userMessage);
    const response = await result.response;
    const text = response.candidates?.[0]?.content?.parts?.[0]?.text || "I'm not sure how to respond.";

    return res.status(200).json({ reply: trimResponse(text) });
  } catch (error) {
    console.error("Error in chat request:", error);

    return res.status(500).json({
      error: `Internal Server Error: ${error.message}`,
      details: error.response?.data || "No additional details available.",
    });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
