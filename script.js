// 1. The Toggle Logic
function toggleChat() {
    const chatWindow = document.getElementById('chatWindow');
    if (chatWindow.style.display === "flex") {
        chatWindow.style.display = "none";
    } else {
        chatWindow.style.display = "flex";
    }
}

// 2. The Send Logic
async function sendMessage() {
    const inputField = document.getElementById('userInput');
    const messageContainer = document.getElementById('chatMessages');
    const userText = inputField.value.trim();

    if (!userText || !messageContainer) return;

    // Add User Message
    const userDiv = document.createElement('div');
    userDiv.className = 'user-msg';
    userDiv.textContent = userText;
    messageContainer.appendChild(userDiv);

    inputField.value = '';
    messageContainer.scrollTop = messageContainer.scrollHeight;

    try {
        const response = await fetch('http://localhost:5000/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userMessage: userText })
        });
        const data = await response.json();
        
        // Add Bot Message
        const botDiv = document.createElement('div');
        botDiv.className = 'bot-msg';
        botDiv.textContent = data.reply;
        messageContainer.appendChild(botDiv);
    } catch (error) {
        console.error("Connection Error:", error);
    }
    messageContainer.scrollTop = messageContainer.scrollHeight;
}

// 3. SECURE EVENT LISTENERS (The fix for your error)
// This code runs once the page is loaded   
document.addEventListener('DOMContentLoaded', () => {
    const chatBtn = document.getElementById('chatBtn'); // The floating 💬 button
    const sendBtn = document.getElementById('sendBtn'); // The "Send" button
    const userInput = document.getElementById('userInput');

    if (chatBtn) chatBtn.addEventListener('click', toggleChat);
    if (sendBtn) sendBtn.addEventListener('click', sendMessage);
    if (userInput) {
        userInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') sendMessage();
        });
    }
});