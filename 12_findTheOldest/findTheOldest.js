const findTheOldest = function(arr) {
    return arr.reduce((oldest, current) => {
        let oldestAge, currentAge;
        if("yearOfDeath" in oldest) {
            oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;
        }
        else {
            oldestAge = new Date().getFullYear() - oldest.yearOfBirth;
        }

        if("yearOfDeath" in current) {
            currentAge = current.yearOfDeath - current.yearOfBirth;
        }
        else {
            currentAge = new Date().getFullYear() - current.yearOfBirth;
        }
        
        let older = currentAge > oldestAge ? current : oldest;
        return older;
    }
);
}

// Do not edit below this line
module.exports = findTheOldest;
