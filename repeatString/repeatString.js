var repeatString = function(text, num) {
    let textString = '';
    if (num < 0) {
        return 'ERROR';
    }
    for (let i = 0; i < num; i++) {
        textString += text;
    }
    return textString;
}
module.exports = repeatString
