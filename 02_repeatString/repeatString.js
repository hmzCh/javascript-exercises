const repeatString = function(string, num) {
  
    if (num <0) {return "ERROR"}
  
    let returnString = ""
    for(i=1; i<=num; i++) {
        returnString = returnString + string
  }
  return returnString
};

// Do not edit below this line
module.exports = repeatString;
