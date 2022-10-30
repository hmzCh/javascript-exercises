const removeFromArray = function(inputArray, ...itemsToRemove) {

   const outputArray = []
   //const unwantedItems = [...arguments]
   const unwantedItems = arguments[1]
   let shouldAdd = true

    inputArray.forEach((item) => {
        shouldAdd = true
        for(i=0;i<unwantedItems.length;i++) {
            if (item === unwantedItems[i]) {shouldAdd = false}
        }
        if (shouldAdd = true) {outputArray.push(item)}
    });

    return outputArray

};

// Do not edit below this line
module.exports = removeFromArray;
