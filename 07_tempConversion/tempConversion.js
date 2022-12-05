const roundToDP = (num, dp) => {
  const baseTen = Math.pow(10, dp)
  return Math.round(num * baseTen) / baseTen
}

const convertToCelsius = function (degreeF) {
    const floatAnswer = (degreeF - 32) / 1.8;
    return roundToDP(floatAnswer, 1)
};

const convertToFahrenheit = function (degreeC) {
    const floatAnswer = degreeC * 1.8 + 32;
    return roundToDP(floatAnswer, 1)
};

// Do not edit below this line
module.exports = {
    convertToCelsius,
    convertToFahrenheit,
};
