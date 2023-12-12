let chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "How can I help you?", "Thank You"];
let chatContainer = document.getElementById("chatContainer");
let inputE1 = document.getElementById("userInput");
let inputMsg = inputE1.value;
let sendButtonE1 = document.getElementById("sendMsgBtn");

function msgfromchatbot() {
    let chatBoxLeg = chatbotMsgList.length;
    let chatboxMsg = chatbotMsgList[Math.ceil(Math.random(0, 1) * chatBoxLeg) - 1];

    let chatmsgContainer = document.createElement("div");
    chatmsgContainer.classList.add("msg-from-chatbot-container");
    chatContainer.appendChild(chatmsgContainer);

    let msgfromchatbot = document.createElement("span");
    msgfromchatbot.textContent = chatboxMsg;
    msgfromchatbot.classList.add("msg-from-chatbot");
    chatmsgContainer.appendChild(msgfromchatbot);
}

function msgTochatbot() {
    let msgContainer = document.createElement("div");
    msgContainer.classList.add("msg-to-chatbot-container");
    chatContainer.appendChild(msgContainer);

    let msgTochatbot = document.createElement("span");
    msgTochatbot.textContent = inputE1.value
    msgTochatbot.classList.add("msg-to-chatbot");
    msgContainer.appendChild(msgTochatbot);

    inputE1.value = "";
    msgfromchatbot();
}

sendButtonE1.onclick = function() {
    msgTochatbot();
}