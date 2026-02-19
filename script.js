let input = document.getElementById('textArea');
let output = document.getElementById('outputText');
let charCount = document.getElementById('charCount');
let html = '';




// UpperCase the words

function upperCase(){
    html = input.value.toUpperCase();
    output.innerHTML = html;
}

// LowerCase the words

function lowerCase(){
    html = input.value.toLowerCase();
    output.innerHTML = html;
}

// Capitalize the words

function capitalize(){
    let array = input.value.split(" ");
    let capitalWord = array.map((words) => words.charAt(0).toUpperCase() + words.slice(1),);
    html = capitalWord.join(" ");
    output.innerHTML = html;
}

// Remove Extra Spaces in the sentence

function extraSpaces(){
    let remove = input.value.trim();
    html = remove;
    output.innerHTML = html;
}

// Replace Words in the sentence

function replacement(){
    let question = prompt("What word would you like to replace?");
    let replacement = prompt("What would you like to replace it with?");
    let replaced = input.value.replace(question, replacement);
    html = replaced;
    output.innerHTML = html;
}

// Count the characters in the sentence

function count(){
    charCount.innerHTML = input.value.length;
}