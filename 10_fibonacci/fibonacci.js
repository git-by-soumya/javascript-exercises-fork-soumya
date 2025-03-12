const fibonacci = function(n) {
    n = +n;
    if(n === 1 || n === 2) {
        return 1;
    }
    else if(n < 0) {
        return "OOPS";
    }
    let a = b = 1;
    let result = 0;
    for(let i = 3; i <= n; i++) {
        result = a + b;
        a = b;
        b = result;
    }
    return result;
};

// Do not edit below this line
module.exports = fibonacci;
