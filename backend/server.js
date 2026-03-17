

const express = require('express');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const fs = require('fs');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

// --- THE FIX IS HERE ---
let knowledgeBase = {}; // Declare it first!

try {
    // Make sure 'knowledge.json' is in the SAME folder as 'server.js'
    const rawData = fs.readFileSync('./knowledge.json', 'utf8');
    knowledgeBase = JSON.parse(rawData);
    console.log("✅ Knowledge base loaded.");
} catch (err) {
    console.error("❌ Error loading knowledge.json:", err.message);
    // Provide a fallback so the AI doesn't crash if the file is missing
    knowledgeBase = { info: "No data available." };
}
// ------------------------

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.post('/api/chat', async (req, res) => {
    try {
        const { userMessage } = req.body;
        console.log("1. Received from frontend:", userMessage);

        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });        

        // Now 'knowledgeBase' is defined and safe to use!
        const prompt = `Context: ${JSON.stringify(knowledgeBase)}. User: ${userMessage}`;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        res.json({ reply: response.text() });

    } catch (error) {
        console.error("❌ SERVER CRASH ERROR:", error.message);
        res.status(500).json({ error: error.message });
    }
});

app.listen(5000, () => console.log("Agent running on http://localhost:5000"));