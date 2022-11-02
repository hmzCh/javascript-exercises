const fibonacci = function(input) {
    
    if (input < 0) {
        return "OOPS"
    }
    else {
        let sequence = new Array(input)
        sequence[0] = 1
        sequence[1] = 1
        for (i=2; i <=input - 1; i++) {
            sequence[i] = sequence[i-1] + sequence[i-2]
        }
        return sequence[input - 1]
    }
};

// Do not edit below this line
module.exports = fibonacci;
