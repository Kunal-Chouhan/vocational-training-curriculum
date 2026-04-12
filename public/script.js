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
  });





  // dashboard

  function showSection(section){

    document.getElementById('dashboardSection').style.display= 'none';
    document.getElementById('aiSection').style.display = "none";
    document.getElementById('programSection').style.display = "none";
    document.getElementById('careerSection').style.display = "none";
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