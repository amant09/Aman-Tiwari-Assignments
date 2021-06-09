var sum = function(a, b){
    return  `Sum of ${a} & ${b} is:  ${a+b}`;
};

var difference = function(a, b){
    return `Difference of ${a} & ${b} is: ${a-b}`;
};

var multiply = function(a, b){
    return `Product of ${a} & ${b} is:  ${a*b}`;
};

var divide = function(a, b){
    return `${a} / ${b} is:  ${a/b}`;
};

module.exports.sum = sum;
module.exports.difference = difference;
module.exports.multiply = multiply;
module.exports.divide = divide;