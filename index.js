let inquirer = require("inquirer");
let chalk = require("chalk");
let word = require("./word.js");
let letter = require("./letter.js");
var prompts = new Rx.Subject();
// inquirer.prompt(prompts);

// // At some point in the future, push new questions
// prompts.next({
//     /* question... */
// });
// prompts.next({
//     /* question... */
// });

// // When you're done
// prompts.complete();

let words = ["kobe", "quarters", "points", "defense", "center", "timeout"];
let guess = 9;
let input = "";
let wordChoice = words[Math.floor(Math.random() * words.length)];
console.log(wordChoice);

let newWord = new word(wordChoice, input);
newWord.display();

function askQuestion() {
    inquirer.prompt({ name: "letter", type: "input", message: "Guess a letter!" }).then((response) => {
        input = response;
        console.log(newWord.wordArr.join(" "));
        guess--;
        if (guess > 0) {
            console.log("You have " + guess + " guesses remaining.");
            askQuestion();
        }
    });
}
askQuestion();