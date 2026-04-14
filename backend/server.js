const express = require('express');
const Groq = require('groq-sdk');
const fs = require('fs');
const cors = require('cors');
require('dotenv').config();

const knowledgeBase  =require('./knowledge.json')

const app = express();
app.use(express.json());
app.use(cors());

// new
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/vocationalDB')
.then(() => console.log("✅ MongoDB connected"))
.catch(err => console.log(err));

const bcrypt = require('bcryptjs');
const User = require('./models/user');

app.post('/api/signup', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ error: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      name,
      email,
      password: hashedPassword
    });

    await user.save();

    res.json({ message: "Signup successful" });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const jwt = require('jsonwebtoken');

app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.json({ error: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.json({ error: "Invalid password" });

    const token = jwt.sign(
      { userId: user._id,
        name: user.name
       },
      "SECRET_KEY",
      { expiresIn: "1d" }
    );

    res.json({ message: "Login success", token });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

function authMiddleware(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, "SECRET_KEY");
    req.user = decoded;
    next(); // continue to next function
  } catch (err) {
    return res.status(401).json({ error: "Invalid token" });
  }
}

//new end

// new end




// let knowledgeBase = {};
// try {
//     const rawData = fs.readFileSync('./knowledge.json', 'utf8');
//     knowledgeBase = JSON.parse(rawData);
//     console.log("✅ Knowledge base loaded.");
// } catch (err) {
//     console.error("❌ Error loading knowledge.json:", err.message);
//     knowledgeBase = { info: "No data available." };
// }

// const client = new Groq({ apiKey: process.env.GROQ_API_KEY });

// app.post('/api/chat', async (req, res) => {
//     try {
//         const { userMessage } = req.body;
//         console.log("1. Received from frontend:", userMessage);

//         const response = await client.chat.completions.create({
//             model: "llama-3.1-8b-instant", // Free, fast
//             messages: [
//                 { 
//                     role: "system", 
//                     content: `You are a helpful assistant. Use this knowledge base to answer: ${JSON.stringify(knowledgeBase)}` 
//                 },
//                 { role: "user", content: userMessage }
//             ],
//         });

//         const reply = response.choices[0].message.content;
//         console.log("2. Sending reply:", reply);
//         res.json({ reply });

//     } catch (error) {
//         console.error("❌ SERVER CRASH ERROR:", error.message);
//         res.status(500).json({ error: error.message });
//     }
// });


// agent assisstant dashborad

// 1 intent detection
function detectIntent(message) {
  const text = message.toLowerCase();

  if (text.includes("elementary") || text.includes("middle") || text.includes("high"))
    return "LEVEL";

  if (
    text.includes("career") ||
    text.includes("job") ||
    text.includes("future") ||
    text.includes("coding") ||
    text.includes("design") ||
    text.includes("developer") ||
    text.includes("what should i learn") ||
    text.includes("interest")
  )
    return "CAREER";


  if (text.includes("benefit"))
    return "BENEFITS";

  return "UNKNOWN";
}
// find education level
function findLevel(message) {
  const text = message.toLowerCase();

  return knowledgeBase.educational_levels.find(level =>
    text.includes(level.level.toLowerCase())
  );
}

// find career
function findCareer(message) {
  const text = message.toLowerCase();

  return knowledgeBase.career_paths
    .map(career => {
      let score = 0;

      career.related_skills.forEach(skill => {
        if (text.includes(skill)) score++;
      });

      return { ...career, score };
    })
    .filter(c => c.score > 0)
    .sort((a, b) => b.score - a.score); // highest match first

}
// STEP 4: FORMAT RESPONSE
// 🎓 Level Response
function formatLevel(level) {
  if (!level) return "❌ Level not found.";

  let res = `🎓 ${level.level} (${level.grade_range})\n\n`;
  res += `Focus: ${level.focus.join(", ")}\n\n`;

  level.programs.forEach(p => {
    res += `📘 ${p.name}\n`;
    res += `Skills: ${p.skills.join(", ")}\n`;
    res += `Activities: ${p.activities.join(", ")}\n\n`;
  });

  return res;
}

// 🎯 Career Response
function formatCareer(career) {
  if (!career) return "❌ No matching career found.";

  return `🎯 Career: ${career.field}

Roles: ${career.roles?.join(", ") || "N/A"}

Skills Required: ${career.required_skills?.join(", ") || "N/A"}

Tools: ${career.tools?.join(", ") || "N/A"}

Salary: ${career.salary_range || "Not specified"}

Growth: ${career.growth || "N/A"}

Learning Path:
${career.learning_path?.map(step => "• " + step).join("\n") || "N/A"}

Recommended Programs: ${career.recommended_programs?.join(", ") || "N/A"}
`;
}
function formatCareers(careers) {
  if (!careers || careers.length === 0)
    return "❌ No matching careers found.";

  let res = "🎯 Suggested Careers:\n\n";

  careers.slice(0, 3).forEach(career => {
    res += `👉 ${career.field}\n`;
    res += `Roles: ${career.roles?.join(", ") || "N/A"}\n`;
    res += `Skills: ${career.required_skills?.join(", ") || "N/A"}\n`;
    res += `Salary: ${career.salary_range || "Not specified"}\n\n`;
  });

  return res;
}
function formatBenefits() {
  return knowledgeBase.program_benefits
    .map(b => `• ${b.title}: ${b.description}`)
    .join("\n");
}

async function agentController(message) {
  const intent = detectIntent(message);

  if (intent === "LEVEL") {
    return formatLevel(findLevel(message));
  }

  if (intent === "CAREER") {
    const careerList = findCareer(message);
    return formatCareers(careerList);
  }

  if (intent === "BENEFITS") {
    return formatBenefits();
  }

  // ✅ DEFAULT (fallback)
  const fallbackCareers = findCareer(message);
  if (fallbackCareers.length) return formatCareers(fallbackCareers);

  return "🤖 Try asking:\n• I like coding\n• I am interested in design\n• Tell me about careers";
}
// 🚀 STEP 6: CONNECT API

app.post('/api/chat', authMiddleware, async (req, res) => {
  try {
    const { userMessage } = req.body;

    const reply = await agentController(userMessage);

    res.json({ reply });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


app.listen(5000, () => console.log("Agent running on http://localhost:5000"));