const removeFromArray = function(array, ...argsToBeRemoved) {
    for(const arg of argsToBeRemoved) {
        while(true) {
            let index = array.indexOf(arg);
            if(index !== -1) {
                array.splice(index, 1);
            }
            else {
                break;
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
