const removeFromArray = function(array, num) {
    let index = array.indexOf(num);
    array.splice(index, 1);

    return array;
}

module.exports = removeFromArray
