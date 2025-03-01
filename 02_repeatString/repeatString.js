const repeatString = function(stringValue, frequency) {
    if(frequency < 0) return "ERROR";
    let result = "";
    for(let i = 1; i <= frequency; i++) {
        result += stringValue;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
