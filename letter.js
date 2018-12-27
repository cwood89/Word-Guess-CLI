function Letter(lett, input) {
    this.lett = lett;
    this.isGuessed;
    this.show = function () {
        if (!this.isGuessed) {
            this.lett = "_";
        } else {
            this.lett = lett;
        }
    };
    this.check = function () {
        if (input === lett) {
            this.isGuessed = true;
        } else {
            this.isGuessed = false;
        }
    };
}

module.exports = Letter;