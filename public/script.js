// explore path

const careerDetails = {

  developer: {
    title: "Web Developer",
    category: "Technology",
    description: "Build websites and web applications used worldwide.",
    skills: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
    path: [
      "Learn HTML & CSS",
      "Learn JavaScript",
      "Build projects",
      "Learn React",
      "Learn backend",
      "Apply for jobs"
    ]
  },

  bi: {
    title: "Business Intelligence Analyst",
    category: "BI",
    description: "Turn data into business insights.",
    skills: ["SQL", "Power BI", "Tableau", "Data Visualization"],
    path: [
      "Learn Excel",
      "Learn SQL",
      "Learn Power BI/Tableau",
      "Practice dashboards",
      "Build portfolio",
      "Apply for internships"
    ]
  },

  aiTech: {
    title: "AI Automation Technician",
    category: "Automation",
    description: "Work with robotics and automation systems.",
    skills: ["PLC", "Robotics", "IoT", "Diagnostics"],
    path: [
      "Learn electronics basics",
      "Learn PLC programming",
      "Understand robotics",
      "Work on automation projects",
      "Get certification",
      "Apply for jobs"
    ]
  },

  grade5: {
    title: "Elementary Learning (Grade 5)",
    category: "K–5",
    description: "Build strong foundation skills.",
    skills: [
      "Reading", "Writing", "Math",
      "Problem Solving", "Creativity",
      "Communication", "Computer Basics"
    ],
    path: [
      "Improve reading habits",
      "Practice writing",
      "Learn basic math",
      "Do puzzles",
      "Use educational apps",
      "Work in groups"
    ]
  },
  dataScientist: {
  title: "Data Scientist",
  category: "Technology",
  description: "Analyze complex data to find patterns and build predictive models.",
  skills: [
    "Python",
    "SQL",
    "Machine Learning",
    "Statistics",
    "Data Visualization",
    "Pandas & NumPy"
  ],
  path: [
    "Learn Python basics",
    "Learn statistics & probability",
    "Learn SQL for data handling",
    "Understand Machine Learning concepts",
    "Work on real datasets",
    "Build projects (prediction models)",
    "Apply for internships/jobs"
  ]
},

productAnalyst: {
  title: "Product Data Analyst",
  category: "Technology",
  description: "Analyze user behavior and improve product decisions using data.",
  skills: [
    "SQL",
    "Excel",
    "Tableau / Power BI",
    "Data Analysis",
    "A/B Testing",
    "Critical Thinking"
  ],
  path: [
    "Learn Excel & data basics",
    "Learn SQL queries",
    "Learn data visualization tools",
    "Understand product metrics (DAU, retention)",
    "Practice A/B testing",
    "Build dashboards",
    "Apply for internships"
  ]
},

promptUX: {
  title: "Prompt Engineer & UX Designer",
  category: "AI + Design",
  description: "Design AI prompts and user experiences for better interaction.",
  skills: [
    "Prompt Engineering",
    "User Research",
    "Figma",
    "Wireframing",
    "NLP Basics",
    "Creative Thinking"
  ],
  path: [
    "Learn basics of AI & NLP",
    "Understand prompt design techniques",
    "Learn UX/UI principles",
    "Practice Figma & wireframing",
    "Build AI-based projects",
    "Create portfolio",
    "Apply for roles"
  ]
},

spaceScientist: {
  title: "Space Explorer (Scientist)",
  category: "Science",
  description: "Study space, planets, and build technologies for exploration.",
  skills: [
    "Physics",
    "Mathematics",
    "Astronomy",
    "Problem Solving",
    "Research Skills",
    "Curiosity"
  ],
  path: [
    "Focus on physics & math in school",
    "Learn basics of astronomy",
    "Do science experiments",
    "Study aerospace engineering",
    "Work on space-related projects",
    "Apply for space agencies",
    "Become scientist"
  ]
},

vetDoctor: {
  title: "Animal Doctor (Veterinarian)",
  category: "Medical",
  description: "Treat animals and ensure their health and well-being.",
  skills: [
    "Biology",
    "Animal Care",
    "Diagnosis Skills",
    "Compassion",
    "Medical Knowledge",
    "Communication"
  ],
  path: [
    "Study biology in school",
    "Prepare for medical entrance exams",
    "Complete veterinary degree",
    "Gain practical training",
    "Work in clinics/hospitals",
    "Specialize if needed",
    "Start practice or job"
  ]
}

};



//new signup logic
async function signup() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  const res = await fetch('http://localhost:5000/api/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, email, password })
  });
  
  const data = await res.json();
  
  if (data.message) {
    alert("Signup successful");
    
    // 🔥 IMPORTANT: redirect to index
    window.location.replace("index.html");

  } else {
    alert(data.error);
  }
}

async function login() {
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;
  
  const res = await fetch('http://localhost:5000/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
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
  const currentPage = window.location.pathname.split("/").pop();
  
  const publicPages = ["login.html", "signup.html"];

  const logoutBtn = document.getElementById("logoutBtn");
  const loginBtn = document.getElementById("loginID");
  const signupBtn = document.getElementById("signupID");

  if(token){
    // ✅ User logged in
    if (logoutBtn) logoutBtn.style.display = "block";
    if (loginBtn) loginBtn.style.display = "none";
    if (signupBtn) signupBtn.style.display = "none";
  } else {
    // ❌ Not logged in
    if (logoutBtn) logoutBtn.style.display = "none";
  }

  // 🔥 LOGOUT CLICK
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("token");
      window.location.href = "login.html";
    });
  }




  
  
  // 🚫 Redirect only when needed
  //   if (!token && !publicPages.includes(currentPage)) {
    //     window.location.replace("login.html"); // ✅ no flicker
//     return;
//   }

//   // ✅ Prevent going back to login after already logged in
//   if (token && publicPages.includes(currentPage)) {
  //     window.location.replace("index.html");
  //     return;
  //   }

});
//new signup logic end


// 1. The Toggle Logic
// function toggleChat() {
//   const chatWindow = document.getElementById('chatWindow');
//   if (chatWindow.style.display === "flex") {
//     chatWindow.style.display = "none";
//   } else {
//     chatWindow.style.display = "flex";
//   }
// }

// // 2. The Send Logic
// async function sendMessage() {
//   const inputField = document.getElementById('userInput');
//   const messageContainer = document.getElementById('chatMessages');
//   const userText = inputField.value.trim();
  
//   if (!userText || !messageContainer) return;
  
//   // Add User Message
//   const userDiv = document.createElement('div');
//   userDiv.className = 'user-msg';
//   userDiv.textContent = userText;
//   messageContainer.appendChild(userDiv);
  
//   inputField.value = '';
//   messageContainer.scrollTop = messageContainer.scrollHeight;
  
//   try {
//     const response = await fetch('http://localhost:5000/api/chat', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ userMessage: userText })
//     });
//     const data = await response.json();
    
//     // Add Bot Message
//     const botDiv = document.createElement('div');
//     botDiv.className = 'bot-msg';
//     botDiv.textContent = data.reply;
//     messageContainer.appendChild(botDiv);
//   } catch (error) {
//     console.error("Connection Error:", error);
//   }
//   messageContainer.scrollTop = messageContainer.scrollHeight;
// }

// 3. SECURE EVENT LISTENERS (The fix for your error)
// This code runs once the page is loaded   
document.addEventListener('DOMContentLoaded', () => {
  const chatBtn = document.getElementById('chatBtn'); // The floating 💬 button
  const sendBtn = document.getElementById('sendBtn'); // The "Send" button
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

    if(token){
      if(loginBtn){
        loginBtn.style.display ='none';
      }
      if(signupBtn) signupBtn.style.display ='none';
      }

      // welcome name dashboard logic

      // welcome name dashboard logic

const welcomeText = document.getElementById("welcomeText");

if (token && welcomeText) {
  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    console.log("Decoded:", payload);

    const name = payload.name || "Student";

    // greeting based on time
    const hour = new Date().getHours();
    let greeting = "Welcome";

    if (hour < 12) greeting = "Good Morning ☀️";
    else if (hour < 18) greeting = "Good Afternoon 🌤️";
    else greeting = "Good Evening 🌙";

    welcomeText.innerText = `${greeting}, ${name} `;

  } catch (err) {
    console.error("Token decode error:", err);
    welcomeText.innerText = "Welcome ";
  }
}


  // video dashboard

  const video = document.getElementById('myVideo');
  const pauseBtn = document.getElementById('palyPauseBtn');
  const muteBtn = document.getElementById("muteBtn");

  pauseBtn.addEventListener('click',()=>{
    if(video.paused){
      video.play();
      pauseBtn.innerText= '⏸';
    }
    else{
      video.pause();
      pauseBtn.innerText ='▶';
    }
  });

  muteBtn.addEventListener('click',()=>{
    video.muted = ! video.muted;

    if(video.muted){
      muteBtn.innerText = "🔇";
    }
    else{
      muteBtn.innerText = "🔊";
    }
  })



  // explore path
  document.addEventListener("click", function(e) {

    if (e.target.classList.contains("card-btn")) {

      const type = e.target.getAttribute("data-type");

      if (type) {
        openCareerDetails(type);
      }

    }

  }); 
  const devBtn = document.querySelector(".card-btn"); 
  const biBtn = document.querySelector(".btnChange1");
  const aiBtn = document.querySelector(".btnChange2");

  if (devBtn) {
    devBtn.addEventListener("click", () => {
      openCareerDetails("developer");
    });
  }

  if (biBtn) {
    biBtn.addEventListener("click", () => {
      openCareerDetails("bi");
    });
  }

  if (aiBtn) {
    aiBtn.addEventListener("click", () => {
      openCareerDetails("aiTech");
    });
  }


});





// dashboard

function showSection(section){
    
  document.getElementById('dashboardSection').style.display= 'none';
  document.getElementById('aiSection').style.display = "none";
  document.getElementById('programSection').style.display = "none";
  document.getElementById('careerSection').style.display = "none";
  const detail = document.getElementById('careerDetailSection');
  if (detail) detail.style.display = 'none';

  const header = document.getElementById('headerTitle');
  
  if(section === "dashboard"){
      document.getElementById('dashboardSection').style.display= 'block';
      header.innerText = "Dashboard";
    }
    if (section === "ai") {
    document.getElementById('aiSection').style.display = "block";
    header.innerText = "AI Assistant";
  }

  if (section === "program") {
    document.getElementById('programSection').style.display = "block";
    header.innerText = "Programs";
  }

  if (section === "career") {
    document.getElementById('careerSection').style.display = "block";
    header.innerText = "Career Guide";
  }

}
// dashboard recomend btn logic
document.addEventListener("DOMContentLoaded", () => {

  const aiBtn = document.getElementById("aiBtn");
  const programBtn = document.getElementById("programBtn");
  const careerBtn = document.getElementById("careerBtn");

  if (aiBtn) {
    aiBtn.addEventListener("click", () => {
      showSection("ai");
    });
  }

  if (programBtn) {
    programBtn.addEventListener("click", () => {
      showSection("program");
    });
  }

  if (careerBtn) {
    careerBtn.addEventListener("click", () => {
      showSection("career");
    });
  }

});


// explore path
  function openCareerDetails(type) {

  const data = careerDetails[type];
  if (!data) return;

  // hide sections
  const ids = [
    'dashboardSection',
    'aiSection',
    'programSection',
    'careerSection'
  ];

  ids.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.display = 'none';
  });

  document.getElementById('careerDetailSection').style.display = 'block';

  // fill basic info
  document.getElementById("detailTitle").innerText = data.title;
  document.getElementById("detailCategory").innerText = data.category;
  document.getElementById("detailDesc").innerText = data.description;

  // 🔥 SKILLS AS TAGS
  const skillBox = document.getElementById("detailSkills");
  skillBox.innerHTML = "";

  data.skills.forEach(skill => {
    const span = document.createElement("span");
    span.className = "skill-tag";
    span.innerText = skill;
    skillBox.appendChild(span);
  });

  // 🔥 PATH AS CARDS
  const pathBox = document.getElementById("detailPath");
  pathBox.innerHTML = "";

  data.path.forEach((step, index) => {
    const div = document.createElement("div");
    div.className = "path-step";
    div.innerText = `Step ${index + 1}: ${step}`;
    pathBox.appendChild(div);
  });
}

  // ai assisstant
  async function sendMessage() {
  const input = document.getElementById('userInput');
  const chatBox = document.getElementById('chatBox');

  const userText = input.value.trim();
  if (!userText) return;

  // Show user message
  const userMsg = document.createElement('div');
  userMsg.className = "user-msg";
  userMsg.innerText = userText;
  chatBox.appendChild(userMsg);

  input.value = "";

  // Fetch from backend
  const res = await fetch('http://localhost:5000/api/chat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('token')
    },
    body: JSON.stringify({ userMessage: userText })
  });

  const data = await res.json();

  // Show bot message
  const botMsg = document.createElement('div');
  botMsg.className = "bot-msg";
  botMsg.innerText = data.reply;
  chatBox.appendChild(botMsg);

  // Auto scroll
  chatBox.scrollTop = chatBox.scrollHeight;
}
document.getElementById("userInput").addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    sendMessage();
  }
});