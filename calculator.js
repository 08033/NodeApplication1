function addTwo(var1, var2) {
    return var1 + var2;
}

function subtractTwo(var1, var2) {
    return var1 - var2;
}

function multiplyTwo(var1, var2) {
    return var1 * var2;
}

function divideTwo(var1, var2) {
    return (var1 / var2);
}

module.exports.sum = addTwo;
module.exports.minus = subtractTwo;
module.exports.product = multiplyTwo;
module.exports.divide = divideTwo;