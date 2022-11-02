const palindromes = function (input) {
    input = input.toLowerCase()
    for (i=0; i<input.length; i--) {
        if (input.charAt(i) !== input.charAt(input.length-1-i)) {
            return false
        }
    }
    return true
};

// Do not edit below this line
module.exports = palindromes;
