//basic 
//1

function numHeads(a){
    var heads= 0;
    var tails = 0;
    for(i=0; i< a; i++){
        var coinFlip = Math.random();
        if(coinFlip<0.5){
            heads++;
        }else{
            tails++;
        }
    }document.write(" The number of times heads occured is : "+ heads);
}
//2
function parity(b){

     if (b%2 === 0){
        //document.write("Even");
    }
    else{
        //document.write("Odd");
}
}
//3
function max(a , b , c){
    if(a>b && a>c){
        document.write("The Max of the three is " + a);
    }
    else if(b>a && b>c) {
        document.write("The Max of the three is " + b);
        
    }
    else{
        document.write("The Max of the three is " + c);
    }
}


//4


function headsRatio(a){
    var heads= 0;
    var tails = 0;
    for(i=0; i< a; i++){
        var coinFlip = Math.random();
        if(coinFlip<0.5){
            heads++;
        }else{
            tails++;
        }
    }document.write(" The ratio of heads occurance is : "+ heads/a);
}

//5
function padChars(a , b){
    for (i=0; i<a; i++){
        document.write(b);
    }
}

//6

var sides = ["One", "Two", "Three", "Four", "Five", "Six"];
var count = 1;
var roll = sides[Math.floor(Math.random() * 6)];

while (roll != "Six") {
    count += 1;
    console.log("Die:- " + roll);
    roll = sides[Math.floor(Math.random() * 6)];
}
console.log("Die:-" + roll);
console.log(count + " times you have to roll a die to get a six");


//7

function randomMessage(){
    var array1 = ["Have a GOOD Day!" , "Have a BAD day!"]
    var x = 10*Math.random();
    var y = Math.floor(x);
    console.log(y);
    if(y%2===0){
        document.write(array1[0]);
    }else{
        document.write(array1[1]);
    }
}
randomMessage()



//basic js1
//1

var arrLen = 4;
var fourNums = [];

while (fourNums.length < arrLen) {
    fourNums.push(Math.random());
}
fourNums = Array.from(Array(arrLen)).map(x=>Math.random());
document.write(fourNums);

//2

function twoStep(){
    var hundredNums = [];
    for(i=0;i<10;i++){
        for(j=0;j<10;j++){
            hundredNums.push() = Math.random()
        }
    }
    console.log(hundredNums)
}

//  3
function numberArray(strings){
    var num = [];
    for(i=0;i< strings.length ; i++){
        num[i] = Number(strings[i])
    }
    console.log(num)
    
    //Output --> undefined
    // var nums = strings.forEach(function(str){
    //     Number(str)
    // })
    // console.log(nums)
}

//  4
function element_remove(arr) {
    var i = 0;
    while (i < arr.length) {
      if (arr[i] === "") {
        arr.splice(i, 1);
      } else {
        ++i;
      }
    }
    return arr;
  }

function longestToken(string) {
    var arrayOfstring = string.split("ab");
    var longestString = "";
    if (!(arrayOfstring.includes("a") || arrayOfstring.includes("b"))) {
      element_remove(arrayOfstring);
      longestString = arrayOfstring.reduce((a, b) => {
        return a.length > b.length ? a : b;
      });
    }
    return longestString;
  }
  console.log(longestToken("djoiashsbsbfsdbfbaaa"));
  console.log(longestToken("iash"));

//  5
function lengthOfNonQWords(strings) {
    var totalLength = 0;
    for (i = 0; i < strings.length; i++) {
      if (strings[i].includes("q")) {
        continue;
      } else {
        totalLength += strings[i].length;
      }
    }
    console.log(totalLength);
  }
  lengthOfNonQWords(["stop", "quit", "exit"]);
  lengthOfNonQWords(["queen", "quit"]);

//...................................................
//  1 done

//  2
//    x = 5
//    console.log(x)

//  3   half(4) -> 2, half(3) -> 1.5


//  4 -> x = 5

//  5
// function seven(){
//     x=7
//     return x
// }

//  6
function calculation(a,b,c){
    return (a+b)/c
}
// calculation(1,1,0)   ->  Infinity
// calculation(-1,-1,0)   ->  -Infinity
// calculation(1,-1,0)   ->  NaN




//  8
function isEven(x){
   return (x % 2 == 0 ) ? true : false
}



//9 guess game

var secretNumber, guess;

        secretNumber = Math.floor(Math.random() * 10);
        guess = window.prompt("Enter a number: ");
        if (guess) {
            if (guess == secretNumber) {
                document.write("Your guess is correct. Congratulations!");
            }
            else if (guess < secretNumber) {
                document.write("Your guess is smaller than the secret number.");
            }
            else if (guess > secretNumber) {
                document.write("Your guess is greater than the secret number.");
            }
        }
        else{
            document.write("Please enter a valid number...");
        }

// 10 leap years
        var year = prompt("please input a year to find out the next 20 years");
        var counter = 20;
        var result = true;

        while (counter >= 0) {

            if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
                result = true;
                console.log(year);
                year++;
                counter--;
            }
            else {
                year++;
            }
        }

//11 largest element

var inputArray = [];
var size = window.prompt("Enter size of a list");

for (var i = 0; i < size; i++) {

    inputArray[i] = prompt('Enter Element ' + (i + 1));
}

function maxArray(arr) {
    var maxValue = -Infinity;
    for (item of arr) {
        if (item > maxValue)
            maxValue = item;
    }
    return maxValue;
   // return Math.max.apply(null, arr);
}
document.write("Largest element from " + inputArray + " is: " + maxArray(inputArray));


//12 list reverse

var inputArray = [];
var size = window.prompt("Enter size of a list");

for (var i = 0; i < size; i++) {

    inputArray[i] = prompt('Enter Element ' + (i + 1));
}

function reverseArr(arr) {
    var revArr = [];
    for (var i = arr.length - 1; i >= 0; i--) {
        revArr.push(arr[i]);
    }
    return revArr;
}

document.write("Actual list: " + inputArray  +"Reversed list: " + reverseArr(inputArray));


//13 list search
var inputArray = [];
        var size = window.prompt("Enter size of a list");

        for (var i = 0; i < size; i++) {

            inputArray[i] = prompt('Enter Element ' + (i + 1));
        }

        function checkElementInArray(arr) {
            var element = window.prompt("Enter element to seach in array");
            for (var i = 0; i < arr.length; i++) {
                if (element == arr[i])
                    return "Element is in the list";
            }
            return "Element is not found in the list";
        }

        document.write("Input list: " + inputArray +  + "Element is: " + checkElementInArray(inputArray));

//14  display odd

var inputArray = [];
        var size = window.prompt("Enter size of a list");

        for (var i = 0; i < size; i++) {

            inputArray[i] = prompt('Enter Element ' + (i + 1));
        }

        function oddPositionElementsInArray(arr) {
            var oddIndex = [];
            for (var i = 0; i < arr.length; i += 2) {
                oddIndex.push(arr[i]);
            }
            return oddIndex;
        }

        document.write("Input list: " + inputArray  + "Odd position elements in the list are: " + oddPositionElementsInArray(inputArray));

//15 list total
var inputArray = [];
        var size = window.prompt("Enter size of a list");

        for (var i = 0; i < size; i++) {

            inputArray[i] = prompt('Enter Element ' + (i + 1));
        }

        function totalOfArray(arr) {
            var total = 0;
            for (var i = 0; i < arr.length; i++) {
                total += parseInt(arr[i]);
            }
            return total;
        }

        document.write("Input list: " + inputArray + "Total of list: " + totalOfArray(inputArray));

//16 palindrome

var inputString = window.prompt("Enter a string:");

        function isPalindrome(str) {
            for (let i = 0; i < str.length / 2; i++) {

                if (str[i] !== str[str.length - 1 - i]) {
                    return 'String is not a palindrome';
                }
            }
            return 'String is a palindrome';
        }

//17 listSum using loops and recursion

var inputArray = [];
        var size = window.prompt("Enter size of a list");

        for (var i = 0; i < size; i++) {

            inputArray[i] = parseInt(window.prompt('Enter Element ' + (i + 1)));
        }

        function arrayTotalUsingFor(arr) {
            var total = 0;
            for (var i = 0; i < arr.length; i++) {
                total += arr[i];
            }
            return total;
        }

        function arrayTotalUsingWhile(arr) {
            var total = 0;
            var counter = 0
            while (counter < arr.length) {
                total += arr[counter];
                counter += 1;
            }
            return total;
        }

        const arrayTotalUsingRecursion = function (arr) {
            return (arr.length === 0) ? 0 : arr[0] + arrayTotalUsingRecursion(arr.slice(1));
        }

        document.write("Input list: " + inputArray  + "Total of list using for loop: " + arrayTotalUsingFor(inputArray) );
        document.write("Input list: " + inputArray  + "Total of list using while loop: " + arrayTotalUsingWhile(inputArray) );
        document.write("Input list: " + inputArray  + "Total of list using recursion: " + arrayTotalUsingRecursion(inputArray) );


















