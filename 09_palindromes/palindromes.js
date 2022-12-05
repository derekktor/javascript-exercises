const palindromes = function (text) {
    // Transform to lowercase
    text = text.toLowerCase();
    // Remove whitespace
    // Remove punctuation
    text = text.replace(/[\s.,!]/g, "")
    // Reverse
    let textArr = text.split("")
    let reverseArr = textArr.reverse()
    let reverseText = reverseArr.join("")
    // Compare
    return text === reverseText;
};

// Do not edit below this line
module.exports = palindromes;
