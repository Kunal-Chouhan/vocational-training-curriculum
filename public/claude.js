// ═══════════════════════════════════════════════
//  SkillBridge — script.js  (Enhanced Career Detail)
// ═══════════════════════════════════════════════

const careerDetails = {

  developer: {
    title: "Web Developer",
    category: "Technology",
    emoji: "💻",
    accent: "#3b82f6",
    description: "Build websites and web applications used by millions worldwide. A web developer designs, codes, and maintains digital products — from simple landing pages to complex web platforms. You'll work with both the visual layer (frontend) and the server logic (backend), making you one of the most versatile professionals in tech.",
    salary: { entry: "₹3–5 LPA", mid: "₹8–15 LPA", senior: "₹20–40 LPA" },
    duration: "6–12 months to job-ready",
    demand: "Very High",
    skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Git", "REST APIs"],
    path: [
      { title: "HTML & CSS Foundations", desc: "Learn the building blocks of every webpage. Master layouts, flexbox, and responsive design.", duration: "3–4 weeks" },
      { title: "JavaScript Essentials", desc: "Add interactivity — learn variables, functions, DOM manipulation, and async programming.", duration: "4–6 weeks" },
      { title: "Build 3 Projects", desc: "Create a portfolio site, a to-do app, and a weather app from scratch.", duration: "2–3 weeks" },
      { title: "Learn React", desc: "Master component-based UI development — the most in-demand frontend skill.", duration: "4–5 weeks" },
      { title: "Backend with Node.js", desc: "Build REST APIs, connect to databases, handle authentication.", duration: "4–5 weeks" },
      { title: "Version Control & Deployment", desc: "Use Git/GitHub, deploy on Vercel or Netlify. Make your work live.", duration: "1–2 weeks" },
      { title: "Apply & Land the Job", desc: "Polish your portfolio, write your resume, do mock interviews, apply on LinkedIn & Naukri.", duration: "Ongoing" }
    ],
    resources: [
      { name: "freeCodeCamp", url: "https://freecodecamp.org", type: "Free" },
      { name: "The Odin Project", url: "https://www.theodinproject.com", type: "Free" },
      { name: "MDN Web Docs", url: "https://developer.mozilla.org", type: "Free" },
      { name: "Udemy — Full Stack Bootcamp", url: "https://udemy.com", type: "Paid" },
      { name: "React Official Docs", url: "https://react.dev", type: "Free" }
    ],
    roles: ["Frontend Developer", "Full Stack Developer", "UI Engineer", "React Developer", "JavaScript Developer"]
  },

  bi: {
    title: "Business Intelligence Analyst",
    category: "Business Intelligence",
    emoji: "📊",
    accent: "#8b5cf6",
    description: "Transform raw numbers into strategic decisions. BI Analysts bridge the gap between data and leadership — they design dashboards, write complex queries, and reveal the insights that guide a company's direction. If you love patterns, storytelling with data, and real business impact, this path is for you.",
    salary: { entry: "₹4–6 LPA", mid: "₹10–18 LPA", senior: "₹22–45 LPA" },
    duration: "4–8 months to job-ready",
    demand: "High",
    skills: ["SQL", "Power BI", "Tableau", "Excel", "Data Modeling", "DAX", "Python (Basic)"],
    path: [
      { title: "Excel Mastery", desc: "Learn pivot tables, VLOOKUP, charts, and data cleaning in Excel — the universal business tool.", duration: "2–3 weeks" },
      { title: "SQL for Data", desc: "Write SELECT, JOIN, GROUP BY, subqueries. Query real databases like a pro.", duration: "3–4 weeks" },
      { title: "Power BI / Tableau", desc: "Build interactive dashboards. Learn DAX measures, calculated columns, and visual best practices.", duration: "4–5 weeks" },
      { title: "Data Modeling", desc: "Understand star schemas, fact/dimension tables, and how to structure data warehouses.", duration: "2–3 weeks" },
      { title: "Business Domain Knowledge", desc: "Study finance, marketing metrics, and KPIs — the context that makes your analysis valuable.", duration: "Ongoing" },
      { title: "Build a Dashboard Portfolio", desc: "Create 3–5 dashboards on real datasets (Sales, HR, Finance) and publish them online.", duration: "3–4 weeks" },
      { title: "Apply for Internships", desc: "Target MNCs, startups, and consulting firms. BI is needed in every industry.", duration: "Ongoing" }
    ],
    resources: [
      { name: "SQLZoo", url: "https://sqlzoo.net", type: "Free" },
      { name: "Microsoft Power BI Learning", url: "https://learn.microsoft.com/power-bi", type: "Free" },
      { name: "Tableau Public Gallery", url: "https://public.tableau.com", type: "Free" },
      { name: "Mode Analytics SQL Tutorial", url: "https://mode.com/sql-tutorial", type: "Free" },
      { name: "Udemy — Power BI A-Z", url: "https://udemy.com", type: "Paid" }
    ],
    roles: ["BI Analyst", "Data Analyst", "Reporting Analyst", "Dashboard Developer", "Analytics Engineer"]
  },

  aiTech: {
    title: "AI Automation Technician",
    category: "Industrial Automation",
    emoji: "🤖",
    accent: "#f59e0b",
    description: "The factory of the future runs on robots and sensors — and you'll be the one keeping it alive. AI Automation Technicians install, program, maintain, and troubleshoot automated machinery, robotic arms, and smart systems. A hands-on career at the intersection of electronics, software, and mechanical engineering.",
    salary: { entry: "₹3–5 LPA", mid: "₹7–14 LPA", senior: "₹18–35 LPA" },
    duration: "8–14 months to job-ready",
    demand: "Growing Fast",
    skills: ["PLC Programming", "SCADA", "Robotics", "IoT", "Ladder Logic", "Sensor Calibration", "HMI"],
    path: [
      { title: "Electronics & Electrical Basics", desc: "Learn circuits, AC/DC fundamentals, relays, and sensors — the hardware side.", duration: "3–4 weeks" },
      { title: "PLC Programming", desc: "Learn Ladder Logic and Function Block Diagrams using Siemens or Allen-Bradley PLCs.", duration: "5–6 weeks" },
      { title: "SCADA & HMI Systems", desc: "Design operator interfaces and monitor industrial processes in real time.", duration: "3–4 weeks" },
      { title: "Robotics Fundamentals", desc: "Understand 6-axis robotic arms, end effectors, and safety protocols (FANUC/ABB).", duration: "4–5 weeks" },
      { title: "IoT & Industry 4.0", desc: "Connect machines to the internet — MQTT, cloud dashboards, predictive maintenance basics.", duration: "3–4 weeks" },
      { title: "Hands-on Project", desc: "Build a mini automated sorting line or conveyor system using real or simulated PLCs.", duration: "4 weeks" },
      { title: "Get Certified & Apply", desc: "Earn a SCADA or PLC certification. Apply at manufacturing, automotive, or pharma companies.", duration: "Ongoing" }
    ],
    resources: [
      { name: "RealPars (PLC/SCADA)", url: "https://realpars.com", type: "Paid" },
      { name: "Automation Direct Learning", url: "https://automationdirect.com", type: "Free" },
      { name: "Coursera — Industrial IoT", url: "https://coursera.org", type: "Free/Paid" },
      { name: "FANUC Robot Academy", url: "https://www.fanucamerica.com/training", type: "Free" },
      { name: "PLCdev.com", url: "https://www.plcdev.com", type: "Free" }
    ],
    roles: ["Automation Technician", "PLC Programmer", "Robotics Technician", "SCADA Engineer", "Control Systems Engineer"]
  },

  dataScientist: {
    title: "Data Scientist",
    category: "Technology",
    emoji: "🧠",
    accent: "#06b6d4",
    description: "Data Scientists are modern detectives — they sift through massive datasets to find hidden patterns, build predictive models, and turn raw numbers into intelligent decisions. You'll combine statistics, programming, and domain expertise to solve problems that no one has solved before.",
    salary: { entry: "₹5–8 LPA", mid: "₹14–25 LPA", senior: "₹30–70 LPA" },
    duration: "10–18 months to job-ready",
    demand: "Very High",
    skills: ["Python", "SQL", "Machine Learning", "Pandas", "NumPy", "Scikit-learn", "Statistics", "Data Visualization"],
    path: [
      { title: "Python Programming", desc: "Learn Python syntax, data structures, loops, functions, and OOP — the language of data science.", duration: "4–5 weeks" },
      { title: "Statistics & Probability", desc: "Understand distributions, hypothesis testing, p-values, and Bayesian thinking.", duration: "3–4 weeks" },
      { title: "Data Manipulation", desc: "Master Pandas and NumPy — clean, transform, and explore real-world messy datasets.", duration: "3–4 weeks" },
      { title: "Machine Learning", desc: "Learn supervised/unsupervised ML — regression, classification, clustering with Scikit-learn.", duration: "6–8 weeks" },
      { title: "Deep Learning Basics", desc: "Intro to neural networks using TensorFlow/Keras. Build image and text classifiers.", duration: "4–5 weeks" },
      { title: "Kaggle Projects", desc: "Compete on Kaggle, publish notebooks, and build a public data science portfolio.", duration: "Ongoing" },
      { title: "Apply for Roles", desc: "Target data science, ML engineering, and analytics roles. Prepare for case-study interviews.", duration: "Ongoing" }
    ],
    resources: [
      { name: "Kaggle Learn", url: "https://www.kaggle.com/learn", type: "Free" },
      { name: "fast.ai", url: "https://www.fast.ai", type: "Free" },
      { name: "StatQuest (YouTube)", url: "https://www.youtube.com/@statquest", type: "Free" },
      { name: "Coursera — Andrew Ng ML Course", url: "https://coursera.org", type: "Free/Paid" },
      { name: "Towards Data Science", url: "https://towardsdatascience.com", type: "Free" }
    ],
    roles: ["Data Scientist", "ML Engineer", "AI Researcher", "NLP Engineer", "Data Analyst"]
  },

  productAnalyst: {
    title: "Product Data Analyst",
    category: "Technology",
    emoji: "📱",
    accent: "#10b981",
    description: "Product Analysts are the eyes of a product team — they track how users actually behave, run experiments to test ideas, and use data to recommend what to build next. If you enjoy the intersection of psychology, statistics, and tech products, this is the role where your insights directly shape the user experience of apps used by millions.",
    salary: { entry: "₹4–7 LPA", mid: "₹12–20 LPA", senior: "₹25–50 LPA" },
    duration: "5–9 months to job-ready",
    demand: "High",
    skills: ["SQL", "Excel", "Tableau / Power BI", "A/B Testing", "Product Metrics", "Python (Basic)", "User Funnels"],
    path: [
      { title: "Excel & Spreadsheet Mastery", desc: "Pivot tables, VLOOKUP, data validation, and charting. The analyst's daily bread.", duration: "2–3 weeks" },
      { title: "SQL for Product Analytics", desc: "Query user events, build retention cohorts, and analyze funnels in real databases.", duration: "3–4 weeks" },
      { title: "Product Metrics", desc: "Learn DAU/MAU, retention, churn, LTV, NPS, and how to define and track KPIs.", duration: "2 weeks" },
      { title: "A/B Testing & Experimentation", desc: "Design experiments, calculate sample sizes, interpret statistical significance.", duration: "2–3 weeks" },
      { title: "Visualization & Storytelling", desc: "Build dashboards in Tableau or Power BI. Tell data stories that executives understand.", duration: "3–4 weeks" },
      { title: "Build a Case Study Portfolio", desc: "Analyze a real app (Spotify, Swiggy, etc.) and present findings like a product analyst would.", duration: "3 weeks" },
      { title: "Apply at Tech Companies", desc: "Target product-led companies: startups, fintech, e-commerce, SaaS.", duration: "Ongoing" }
    ],
    resources: [
      { name: "Mode SQL Tutorial", url: "https://mode.com/sql-tutorial", type: "Free" },
      { name: "Product Analytics by Mixpanel", url: "https://mixpanel.com/blog", type: "Free" },
      { name: "Lenny's Newsletter", url: "https://www.lennysnewsletter.com", type: "Free" },
      { name: "Udacity — Business Analytics", url: "https://udacity.com", type: "Paid" },
      { name: "Google Analytics Academy", url: "https://analytics.google.com/analytics/academy", type: "Free" }
    ],
    roles: ["Product Analyst", "Growth Analyst", "Data Analyst", "Business Analyst", "UX Researcher"]
  },

  promptUX: {
    title: "Prompt Engineer & UX Designer",
    category: "AI + Design",
    emoji: "✨",
    accent: "#ec4899",
    description: "This is one of the newest and most exciting careers in tech — designing how humans talk to AI. You'll craft the prompts, personas, and interaction flows that make AI assistants helpful, safe, and delightful. Combined with UX design, you'll shape the complete experience from user research to AI conversation flow to polished interface.",
    salary: { entry: "₹4–7 LPA", mid: "₹12–22 LPA", senior: "₹28–60 LPA" },
    duration: "6–10 months to job-ready",
    demand: "Emerging & Fast-Growing",
    skills: ["Prompt Engineering", "Figma", "User Research", "Wireframing", "NLP Basics", "Chain-of-Thought", "UX Writing"],
    path: [
      { title: "AI & LLM Fundamentals", desc: "Understand how language models work — tokens, context windows, temperature, and hallucination.", duration: "2–3 weeks" },
      { title: "Advanced Prompt Engineering", desc: "Master few-shot, chain-of-thought, and system prompts. Learn to evaluate and iterate on outputs.", duration: "3–4 weeks" },
      { title: "UX Design Principles", desc: "Learn user-centered design, information architecture, visual hierarchy, and accessibility.", duration: "4–5 weeks" },
      { title: "Figma & Wireframing", desc: "Build low and high-fidelity prototypes. Conduct usability testing on your designs.", duration: "3–4 weeks" },
      { title: "AI Product Design", desc: "Design AI chat interfaces, conversation flows, error states, and trust-building patterns.", duration: "3–4 weeks" },
      { title: "Build a Portfolio Project", desc: "Design a complete AI-powered product — from user research to final Figma prototype with prompts.", duration: "4 weeks" },
      { title: "Apply at AI Companies", desc: "Target AI startups, product design teams at big tech, and UX research roles.", duration: "Ongoing" }
    ],
    resources: [
      { name: "Learn Prompting (free guide)", url: "https://learnprompting.org", type: "Free" },
      { name: "Figma Community", url: "https://www.figma.com/community", type: "Free" },
      { name: "Nielsen Norman Group (UX)", url: "https://www.nngroup.com", type: "Free" },
      { name: "Anthropic Prompt Library", url: "https://docs.anthropic.com/claude/prompt-library", type: "Free" },
      { name: "Interaction Design Foundation", url: "https://www.interaction-design.org", type: "Paid" }
    ],
    roles: ["Prompt Engineer", "UX Designer", "AI Product Designer", "Conversational Designer", "AI Content Strategist"]
  },

  spaceScientist: {
    title: "Space Explorer (Scientist)",
    category: "Aerospace & Science",
    emoji: "🚀",
    accent: "#a78bfa",
    description: "The final frontier awaits. Space Scientists study planets, stars, and galaxies — or build the rockets, satellites, and instruments that carry humans and data beyond Earth's atmosphere. This is one of the most prestigious, challenging, and inspiring career paths imaginable, combining deep mathematics, physics, and cutting-edge engineering.",
    salary: { entry: "₹5–8 LPA", mid: "₹15–30 LPA", senior: "₹35–80 LPA (ISRO/NASA)" },
    duration: "4–8 years (degree-based path)",
    demand: "Specialized but Prestigious",
    skills: ["Physics", "Mathematics", "Astronomy", "Orbital Mechanics", "MATLAB", "C++", "Data Analysis"],
    path: [
      { title: "Excel in Physics & Math (School)", desc: "Build a rock-solid foundation in mechanics, calculus, and electromagnetism — non-negotiable.", duration: "School years" },
      { title: "B.Tech / B.Sc in Relevant Field", desc: "Pursue Aerospace Engineering, Physics, or Electronics. Target IITs, IISc, BITS, or NITs.", duration: "4 years" },
      { title: "Learn Astronomy Basics", desc: "Study celestial mechanics, telescopes, spectroscopy, and planetary science through online courses.", duration: "Alongside degree" },
      { title: "MATLAB & Simulation", desc: "Learn MATLAB/Python for scientific computing — used heavily in space mission analysis.", duration: "3–4 months" },
      { title: "Research Internships", desc: "Apply to ISRO, IIA (Indian Institute of Astrophysics), IUCAA, or NASA research programs.", duration: "Summers" },
      { title: "M.Tech / PhD (Optional but recommended)", desc: "Specialize in Astrophysics, Satellite Systems, or Propulsion for senior research roles.", duration: "2–5 years" },
      { title: "Apply to ISRO, ESA, or Private Space", desc: "Join ISRO's Young Scientist Programme (YUVIKA), or explore private firms like Agnikul Cosmos.", duration: "Ongoing" }
    ],
    resources: [
      { name: "ISRO Young Scientist Programme", url: "https://www.isro.gov.in/yuvika.html", type: "Free" },
      { name: "NASA Open Courseware", url: "https://www.nasa.gov/learning-resources", type: "Free" },
      { name: "Coursera — Astronomy by Duke", url: "https://coursera.org", type: "Free/Paid" },
      { name: "Khan Academy Physics", url: "https://www.khanacademy.org/science/physics", type: "Free" },
      { name: "Space.com News & Learning", url: "https://www.space.com", type: "Free" }
    ],
    roles: ["Aerospace Engineer", "Astrophysicist", "Mission Analyst", "Satellite Engineer", "Space Researcher"]
  },

  grade5: {
    title: "Elementary Learning (Grade 5)",
    category: "Grades K–5",
    emoji: "🌱",
    accent: "#34d399",
    description: "This is where every journey begins! Grade 5 is a magical year of discovery — you're developing the foundational skills that will power everything you do for the rest of your life. Reading, writing, math, and creative thinking are your superpowers. Every great scientist, engineer, and artist started right here.",
    salary: { entry: "Build habits now!", mid: "Skills for life", senior: "Unlimited potential 🌟" },
    duration: "Ongoing through school",
    demand: "Foundation of Everything",
    skills: ["Reading & Comprehension", "Writing", "Arithmetic", "Problem Solving", "Creativity", "Teamwork", "Computer Basics"],
    path: [
      { title: "Read Every Day 📚", desc: "Pick books you love — comics, adventure, science! Reading builds vocabulary and imagination.", duration: "Daily habit" },
      { title: "Practice Math Puzzles 🧩", desc: "Use apps like Khan Academy Kids to make math fun. Practice addition, multiplication, and fractions.", duration: "20 min/day" },
      { title: "Write Stories & Journals ✍️", desc: "Write one short story or journal entry per week. Don't worry about perfection — just express yourself!", duration: "Weekly" },
      { title: "Learn Computer Basics 🖥️", desc: "Practice typing, learn to use Google safely, and create your first presentation or drawing digitally.", duration: "1–2 hrs/week" },
      { title: "Do Science Experiments 🔬", desc: "Vinegar + baking soda, plant growing experiments, simple circuits — science is everywhere!", duration: "Weekly" },
      { title: "Work in Teams 🤝", desc: "Join a school club, do group projects, and practice listening to others. Teamwork is a superpower.", duration: "Ongoing" },
      { title: "Explore Your Interests 🌟", desc: "Try art, music, coding, sports, cooking — discover what lights you up! There's no wrong answer.", duration: "Always" }
    ],
    resources: [
      { name: "Khan Academy Kids", url: "https://www.khanacademy.org/kids", type: "Free" },
      { name: "Scratch (Kid Coding)", url: "https://scratch.mit.edu", type: "Free" },
      { name: "National Geographic Kids", url: "https://kids.nationalgeographic.com", type: "Free" },
      { name: "Typing.com", url: "https://www.typing.com", type: "Free" },
      { name: "Duolingo ABC (Reading)", url: "https://www.duolingo.com", type: "Free" }
    ],
    roles: ["Future Engineer 🔧", "Future Doctor 🏥", "Future Artist 🎨", "Future Scientist 🔬", "Future Leader 👑"]
  },

  vetDoctor: {
    title: "Animal Doctor (Veterinarian)",
    category: "Medical & Animal Care",
    emoji: "🐾",
    accent: "#fb923c",
    description: "Veterinarians are heroes — they heal animals who can't speak for themselves. From puppies and kittens to horses and wildlife, you'll diagnose illnesses, perform surgeries, prescribe treatments, and comfort both animals and their owners. It's one of the most emotionally rewarding careers in medicine, combining scientific rigor with deep compassion.",
    salary: { entry: "₹3–5 LPA", mid: "₹8–15 LPA", senior: "₹20–40 LPA (or own clinic)" },
    duration: "5.5 years (BVSc+AH Degree)",
    demand: "Stable & Rewarding",
    skills: ["Biology", "Animal Anatomy", "Diagnosis", "Surgical Skills", "Pharmacology", "Compassion", "Communication"],
    path: [
      { title: "Focus on Biology & Chemistry (School)", desc: "Score well in Biology and Chemistry — these are the entry requirements for veterinary college.", duration: "Classes 9–12" },
      { title: "Prepare for NEET / State Exams", desc: "Crack veterinary entrance exams. Study NCERT Biology deeply and practice previous papers.", duration: "1–2 years" },
      { title: "BVSc + AH Degree", desc: "5.5-year program covering anatomy, physiology, surgery, animal nutrition, and clinical practice.", duration: "5.5 years" },
      { title: "Clinical Rotations", desc: "Hands-on training in hospitals treating dogs, cats, cattle, and exotic animals.", duration: "Final 2 years" },
      { title: "Internship at Animal Hospital", desc: "Gain real-world experience under senior vets. Learn emergency care, vaccinations, and surgeries.", duration: "6–12 months" },
      { title: "Specialization (Optional)", desc: "Specialize in exotic animals, wildlife, dairy animals, or small animal surgery for higher salaries.", duration: "2–3 years extra" },
      { title: "Start Practice or Join Clinic", desc: "Open your own clinic, join a hospital, work with NGOs, or pursue government veterinary services.", duration: "Career-long" }
    ],
    resources: [
      { name: "Merck Veterinary Manual", url: "https://www.merckvetmanual.com", type: "Free" },
      { name: "VetFolio (CE Resources)", url: "https://www.vetfolio.com", type: "Free/Paid" },
      { name: "NCERT Biology (Class 11–12)", url: "https://ncert.nic.in", type: "Free" },
      { name: "Coursera — Animal Behaviour", url: "https://coursera.org", type: "Free/Paid" },
      { name: "Wildlife SOS India", url: "https://wildlifesos.org", type: "Volunteer" }
    ],
    roles: ["Small Animal Vet", "Wildlife Veterinarian", "Livestock Doctor", "Zoo Vet", "Veterinary Surgeon"]
  }

};


// ═══════════════════════════════════════════════
//  ENHANCED openCareerDetails()
// ═══════════════════════════════════════════════
function openCareerDetails(type) {
  const data = careerDetails[type];
  if (!data) return;

  // Hide all main sections
  const ids = ['dashboardSection', 'aiSection', 'programSection', 'careerSection'];
  ids.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.display = 'none';
  });

  const detailSection = document.getElementById('careerDetailSection');
  detailSection.style.display = 'block';
  detailSection.scrollIntoView({ behavior: 'smooth', block: 'start' });

  // ── REBUILD THE DETAIL SECTION HTML ──
  detailSection.innerHTML = `
    <div class="cd-wrapper">

      <!-- Back button -->
      <button class="back-btn" onclick="showSection('dashboard')">
        ← Back to Dashboard
      </button>

      <!-- Hero Header -->
      <div class="cd-hero" style="--career-accent: ${data.accent};">
        <div class="cd-hero-text">
          <div class="cd-emoji">${data.emoji}</div>
          <div class="cd-badge">${data.category}</div>
          <h1 class="cd-title">${data.title}</h1>
          <p class="cd-desc">${data.description}</p>
        </div>
        <div class="cd-hero-stats">
          <div class="cd-stat-card">
            <span class="cd-stat-label">⏱ Duration</span>
            <span class="cd-stat-value">${data.duration}</span>
          </div>
          <div class="cd-stat-card">
            <span class="cd-stat-label">📈 Job Demand</span>
            <span class="cd-stat-value">${data.demand}</span>
          </div>
          <div class="cd-stat-card salary-card">
            <span class="cd-stat-label">💰 Salary Range</span>
            <div class="cd-salary-grid">
              <span><span class="sal-level">Entry</span><br>${data.salary.entry}</span>
              <span><span class="sal-level">Mid</span><br>${data.salary.mid}</span>
              <span><span class="sal-level">Senior</span><br>${data.salary.senior}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Two-column body -->
      <div class="cd-body">

        <!-- LEFT: Learning Path -->
        <div class="cd-left">
          <h2 class="cd-section-title">📚 Learning Path</h2>
          <div class="cd-path-list">
            ${data.path.map((step, i) => `
              <div class="cd-path-item" style="--step-color: ${data.accent}; animation-delay: ${i * 0.08}s;">
                <div class="cd-step-num">${i + 1}</div>
                <div class="cd-step-content">
                  <div class="cd-step-header">
                    <strong>${step.title}</strong>
                    <span class="cd-step-duration">${step.duration}</span>
                  </div>
                  <p>${step.desc}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- RIGHT: Skills + Roles + Resources -->
        <div class="cd-right">

          <!-- Skills -->
          <div class="cd-panel">
            <h2 class="cd-section-title">⚡ Key Skills</h2>
            <div class="skills-tags">
              ${data.skills.map(s => `<span class="skill-tag" style="--tag-color: ${data.accent};">${s}</span>`).join('')}
            </div>
          </div>

          <!-- Job Roles -->
          <div class="cd-panel">
            <h2 class="cd-section-title">💼 Job Roles You Can Target</h2>
            <div class="cd-roles-list">
              ${data.roles.map(r => `
                <div class="cd-role-item">
                  <span class="cd-role-dot" style="background: ${data.accent};"></span>
                  ${r}
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Resources -->
          <div class="cd-panel">
            <h2 class="cd-section-title">🔗 Free & Paid Resources</h2>
            <div class="cd-resources-list">
              ${data.resources.map(r => `
                <a href="${r.url}" target="_blank" rel="noopener" class="cd-resource-item">
                  <span class="cd-resource-name">${r.name}</span>
                  <span class="cd-resource-type ${r.type === 'Free' ? 'free' : r.type === 'Paid' ? 'paid' : 'mixed'}">${r.type}</span>
                </a>
              `).join('')}
            </div>
          </div>

        </div>
      </div>
    </div>
  `;
}


// ═══════════════════════════════════════════════
//  ALL EXISTING FUNCTIONS — UNCHANGED BELOW
// ═══════════════════════════════════════════════

async function signup() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const res = await fetch('http://localhost:5000/api/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, password })
  });

  const data = await res.json();

  if (data.message) {
    alert("Signup successful");
    window.location.replace("index.html");
  } else {
    alert(data.error);
  }
}

async function login() {
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;
  console.log("helo");

  const res = await fetch('http://localhost:5000/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  const data = await res.json();

  if (data.token) {
    localStorage.setItem('token', data.token);
    window.location.replace("index.html");
    alert("Login successful");
  } else {
    alert(data.error);
  }
}

document.addEventListener('DOMContentLoaded', () => {

  const token = localStorage.getItem('token');
  const logoutBtn = document.getElementById("logoutBtn");
  const loginBtn = document.getElementById("loginID");
  const signupBtn = document.getElementById("signupID");

  if (token) {
    if (logoutBtn) logoutBtn.style.display = "block";
    if (loginBtn) loginBtn.style.display = "none";
    if (signupBtn) signupBtn.style.display = "none";
  } else {
    if (logoutBtn) logoutBtn.style.display = "none";
  }

  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("token");
      window.location.href = "login.html";
    });
  }

});

document.addEventListener('DOMContentLoaded', () => {
  const chatBtn = document.getElementById('chatBtn');
  const sendBtn = document.getElementById('sendBtn');
  const userInput = document.getElementById('userInput');

  const token = localStorage.getItem('token');
  const loginBtn = document.getElementById('loginID');
  const signupBtn = document.getElementById('signupID');

  if (chatBtn) chatBtn.addEventListener('click', toggleChat);
  if (sendBtn) sendBtn.addEventListener('click', sendMessage);
  if (userInput) {
    userInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') sendMessage();
    });
  }

  if (token) {
    if (loginBtn) loginBtn.style.display = 'none';
    if (signupBtn) signupBtn.style.display = 'none';
  }

  // Welcome greeting
  const welcomeText = document.getElementById("welcomeText");
  if (token && welcomeText) {
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      const name = payload.name || "Student";
      const hour = new Date().getHours();
      let greeting = "Welcome";
      if (hour < 12) greeting = "Good Morning ☀️";
      else if (hour < 18) greeting = "Good Afternoon 🌤️";
      else greeting = "Good Evening 🌙";
      welcomeText.innerText = `${greeting}, ${name} `;
    } catch (err) {
      welcomeText.innerText = "Welcome ";
    }
  }

  // Video controls
  const video = document.getElementById('myVideo');
  const pauseBtn = document.getElementById('palyPauseBtn');
  const muteBtn = document.getElementById("muteBtn");

  if (pauseBtn && video) {
    pauseBtn.addEventListener('click', () => {
      if (video.paused) {
        video.play();
        pauseBtn.innerText = '⏸';
      } else {
        video.pause();
        pauseBtn.innerText = '▶';
      }
    });
  }

  if (muteBtn && video) {
    muteBtn.addEventListener('click', () => {
      video.muted = !video.muted;
      muteBtn.innerText = video.muted ? "🔇" : "🔊";
    });
  }

  // Explore path via data-type attribute
  document.addEventListener("click", function (e) {
    if (e.target.classList.contains("card-btn")) {
      const type = e.target.getAttribute("data-type");
      if (type) openCareerDetails(type);
    }
  });

  // Fallback direct binds for cards without data-type
  const devBtn = document.querySelector(".card-btn:not([data-type])");
  const biBtn = document.querySelector(".btnChange1:not([data-type])");
  const aiBtn2 = document.querySelector(".btnChange2:not([data-type])");

  if (devBtn) devBtn.addEventListener("click", () => openCareerDetails("developer"));
  if (biBtn) biBtn.addEventListener("click", () => openCareerDetails("bi"));
  if (aiBtn2) aiBtn2.addEventListener("click", () => openCareerDetails("aiTech"));

});

// Section toggling
function showSection(section) {
  document.getElementById('dashboardSection').style.display = 'none';
  document.getElementById('aiSection').style.display = "none";
  document.getElementById('programSection').style.display = "none";
  document.getElementById('careerSection').style.display = "none";

  const detail = document.getElementById('careerDetailSection');
  if (detail) detail.style.display = 'none';

  const header = document.getElementById('headerTitle');

  if (section === "dashboard") {
    document.getElementById('dashboardSection').style.display = 'block';
    if (header) header.innerText = "Dashboard";
  }
  if (section === "ai") {
    document.getElementById('aiSection').style.display = "block";
    if (header) header.innerText = "AI Assistant";
  }
  if (section === "program") {
    document.getElementById('programSection').style.display = "block";
    if (header) header.innerText = "Programs";
  }
  if (section === "career") {
    document.getElementById('careerSection').style.display = "block";
    if (header) header.innerText = "Career Guide";
  }
}

// Dashboard nav buttons
document.addEventListener("DOMContentLoaded", () => {
  const aiBtn = document.getElementById("aiBtn");
  const programBtn = document.getElementById("programBtn");
  const careerBtn = document.getElementById("careerBtn");

  if (aiBtn) aiBtn.addEventListener("click", () => showSection("ai"));
  if (programBtn) programBtn.addEventListener("click", () => showSection("program"));
  if (careerBtn) careerBtn.addEventListener("click", () => showSection("career"));
});

// AI Chat
async function sendMessage() {
  const input = document.getElementById('userInput');
  const chatBox = document.getElementById('chatBox');

  const userText = input.value.trim();
  if (!userText) return;

  const userMsg = document.createElement('div');
  userMsg.className = "user-msg";
  userMsg.innerText = userText;
  chatBox.appendChild(userMsg);

  input.value = "";

  try {
    const res = await fetch('http://localhost:5000/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      },
      body: JSON.stringify({ userMessage: userText })
    });

    const data = await res.json();

    const botMsg = document.createElement('div');
    botMsg.className = "bot-msg";
    botMsg.innerText = data.reply;
    chatBox.appendChild(botMsg);
  } catch (error) {
    const errMsg = document.createElement('div');
    errMsg.className = "bot-msg";
    errMsg.innerText = "⚠️ Could not connect to server.";
    chatBox.appendChild(errMsg);
  }

  chatBox.scrollTop = chatBox.scrollHeight;
}

const uiInput = document.getElementById("userInput");
if (uiInput) {
  uiInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") sendMessage();
  });
}