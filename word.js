var letter = require("./letter.js");

function Word(word, lett) {
    this.word = Array.from(word);
    this.letterArr = [];
    this.wordArr = [];
    this.letters = function () {
        for (var i = 0; i < this.word.length; i++) {
            let letterObj = new letter(this.word[i], lett);
            this.letterArr.push(letterObj);
        };
    };
    this.display = function () {
        this.letters();
        for (var i = 0; i < this.letterArr.length; i++) {
            this.letterArr[i].check();
            this.letterArr[i].show();
            var letterRes = this.letterArr[i].lett;
            this.wordArr.push(letterRes);
        };
    };
};

module.exports = Word;