class ReverseStr {
    constructor(input) {
        this.input = input;
    }

    result() {
        const show = this.input.split('').reverse().join('');
        return show;
    }
}

class Palindrome extends ReverseStr {
    compare() {
        if (this.input == this.result()) { // super.input == super.result()
            return true;
        }
        return false;
    }
}

const re1 = new Palindrome('aba');
console.log(re1.compare());
