const sumAll = function(no1, no2) {

    let output = 0

    if (typeof no1 != "number" || typeof no2 != "number") {
        return "ERROR"
    }

    if (no1 < 0 || no2 < 0) {
        return "ERROR"
    }

    if (no1<no2) {
        for (i=no1; i<=no2; i++) {
            output = output + i
        }
    }
    else {
        for (i=no2; i<=no1; i++) {
            output = output + i
        }
    }
    
    return output

};

// Do not edit below this line
module.exports = sumAll;
