const sumAll = function(start, end) {
    if(start < 0 || end < 0) {
        return "ERROR";
    }

    if( !Number.isInteger(start) || 
        !Number.isInteger(end) ) {
        return "ERROR";
    }

    if(start > end) {
        /*start = start + end;
        end = start - end;
        start = start - end;*/
        [start, end] = [end, start]; // array destructuring
    }

    let sum = 0;
    for(let i = start; i <= end; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
