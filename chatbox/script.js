window.onload = function(){

    const saved =
    localStorage.getItem("chat");

    if(saved){

        document
        .getElementById("chatbox")
        .innerHTML = saved;
    }
}



function sendMessage() {

    let input =
        document.getElementById("userInput");

    let userText = input.value;

    if(userText === "") return;

    let chatbox =
        document.getElementById("chatbox");

    chatbox.innerHTML +=
        `<div class="user-message">
            ${userText}
        </div>`;

    let response = getBotResponse(userText);

chatbox.innerHTML +=
    `<div class="bot-message">
        ${response}
    </div>`;

input.value = "";

    chatbox.scrollTop =
        chatbox.scrollHeight;


        localStorage.setItem(
    "chat",
    chatbox.innerHTML
);

}


function getBotResponse(message){

    message = message.toLowerCase();

    const responses = {

        hello:[
            "Hello Emmanuel!",
            "Hi there!",
            "Nice to see you!"
        ],

        weather:[
            "I can't check live weather yet.",
            "Looks like a good day for coding."
        ],

        coding:[
            "JavaScript is a great place to start.",
            "Let's build something awesome."
        ]
    };

    if(message.includes("hello")){

        return randomReply(
            responses.hello
        );
    }

    if(message.includes("who are you")){

    return "I'm Coco. A chatbot built by Emmanuel.";
    
    }


    if(message.includes("weather")){

        return randomReply(
            responses.weather
        );
    }

    if(message.includes("coding")){

        return randomReply(
            responses.coding
        );
    }

    return "Interesting. Tell me more.";
}

function randomReply(arr){

    return arr[
        Math.floor(
            Math.random()*arr.length
        )
    ];

}

function clearChat(){

    localStorage.removeItem("chat");

    document.getElementById("chatbox").innerHTML =
        `<div class="bot-message">
            Hello Emmanuel. I'm Coco 🤖
        </div>`;
}

document
.getElementById("userInput")
.addEventListener("keypress", function(event){

    if(event.key === "Enter"){
        sendMessage();
    }

});


