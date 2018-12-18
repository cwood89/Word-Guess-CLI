let inquirer = require("inquirer");
let chalk = require("chalk");
let word = require("./word.js");
let letter = require("./letter.js");

let words = ["kobe", "quarters", "points", "defense", "center", "timeout"];
let wordChoice = words[Math.floor(Math.random() * words.length)];
let guess = 9;

function askQuestion() {
    inquirer.prompt([{ name: "letter", message: "Guess a letter!" }]).then((response) => {
        let newWord = new word(wordChoice, response);
        newWord.display();
        console.log(newWord.wordArr.join(" "));
        guess--;
        if (guess > 0) {
            askQuestion();
        }
    })
};
askQuestion();