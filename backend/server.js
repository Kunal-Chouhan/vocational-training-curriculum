const express = require('express');
const Groq = require('groq-sdk');
const fs = require('fs');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

let knowledgeBase = {};
try {
    const rawData = fs.readFileSync('./knowledge.json', 'utf8');
    knowledgeBase = JSON.parse(rawData);
    console.log("✅ Knowledge base loaded.");
} catch (err) {
    console.error("❌ Error loading knowledge.json:", err.message);
    knowledgeBase = { info: "No data available." };
}

const client = new Groq({ apiKey: process.env.GROQ_API_KEY });

app.post('/api/chat', async (req, res) => {
    try {
        const { userMessage } = req.body;
        console.log("1. Received from frontend:", userMessage);

        const response = await client.chat.completions.create({
            model: "llama-3.1-8b-instant", // Free, fast
            messages: [
                { 
                    role: "system", 
                    content: `You are a helpful assistant. Use this knowledge base to answer: ${JSON.stringify(knowledgeBase)}` 
                },
                { role: "user", content: userMessage }
            ],
        });

        const reply = response.choices[0].message.content;
        console.log("2. Sending reply:", reply);
        res.json({ reply });

    } catch (error) {
        console.error("❌ SERVER CRASH ERROR:", error.message);
        res.status(500).json({ error: error.message });
    }
});

app.listen(5000, () => console.log("Agent running on http://localhost:5000"));