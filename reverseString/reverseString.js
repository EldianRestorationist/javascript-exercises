const reverseString = function(stringText) {
    stringReverse = '';
    let i = stringText.length;
    while (i >= 0) {
        stringReverse += stringText.charAt(i);
        i--;
    }
    return stringReverse;
}

module.exports = reverseString
