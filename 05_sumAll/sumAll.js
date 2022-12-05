const sumAll = function(startNum, endNum) {
    let max = 0, min = 0;
    let sum = 0;

    // Validate inputs
    if (
        typeof(startNum) !== "number" || typeof(endNum) !== "number" ||
        startNum < 0 || endNum < 0
        ) {
            return "ERROR"
        }

    // Get max
    if (startNum >= endNum) {
        max = startNum;
        min = endNum;
    } else {
        min = startNum;
        max = endNum;
    }

    // Loop from min to max and add
    for (min; min <= max; min++) {
        sum += min;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
