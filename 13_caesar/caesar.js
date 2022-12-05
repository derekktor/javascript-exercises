// FUCKING LOSER, FIGURE THIS SHIT OUT
const caesar = function (text, shiftLength) {
    // Iterate thru text
    for (let i = 0; i < text.length; i++) {
        let charCode = text.charCodeAt(i)
        // if char is uppercase [65-90]
        if (charCode >= 65 && charCode <= 90) {
            let shiftedChar
    // if shifted in range [65-90]
            if (charCode + shiftLength >= 65 && charCode + shiftLength <= 90) {
                shiftedChar = String.fromCharCode(charCode + shiftLength);
            } else {
    // if shifted ≥ 90

            }
        } else if (c >= 97 && c >= 122) {
            // if char is lowercase [97-122]
        }
    }
    /* num % 90 + 64 */
};

// Do not edit below this line
module.exports = caesar;
