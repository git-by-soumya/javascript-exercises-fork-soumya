const palindromes = function (string) {
    let stringOnlyLowerLetters =
     string
     .toLowerCase()
     .split("")
     .filter(char => 
        char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122 ||
     char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57)
     .join("");
    
    let stringReverse = stringOnlyLowerLetters.split("").reverse().join("");
    
    return stringOnlyLowerLetters === stringReverse;
};

// Do not edit below this line
module.exports = palindromes;
