//Q1

var http = require('http');


var server = http.createServer(function(req , res){

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end("hey team!");
});

server.listen(3000);
console.log('Success , i\'m listening to port 3000  ');

//Q2

var fs = require('fs');
var readFile = fs.readFileSync('./test.txt' , 'utf8');
console.log(readFile);


//Q3



fs.readdir(__dirname , (err , files)=> {
    
    if(err){
        console.log(err);
    }
    else{
        files.forEach(file => {
            console.log(file);
        });
    }
});

//Q4


var write = fs.writeFileSync('./test1.txt', 'hey ho! let\'s go');
var read = fs.readFileSync('./test1.txt' , 'utf8');
console.log(read);
console.log('The file was saved!');



//Q5


var count = 0;
var search = fs.readFileSync('test.txt', 'utf8');
var arr = new String(search);
var arr2 = arr.split(" ");
console.log(arr2);
for(var i in arr2){
    if(arr2[i]=== 'is'){
        count ++;

    }   
}
console.log(count);


//Q6
//phase 1
var calculator = require('./calculator.js');
calculator.sum(3,7);
calculator.multiply(3,7);


//phase 2
var adder = require('./operations/sum.js');
var subtract = require('./operations/subtract.js');
var multiply = require('./operations/multiply.js');
var divide = require('./operations/divide.js');

adder.sum(3,7);
multiply.multiply(3,7);
subtract.difference(3,7);
divide.divide(20, 5);

//phase 3
const moment = require('moment');
const today = moment();
console.log(`Today is: ${today.format('dddd Do MMMM, YYYY, HH:MM:SS a')} , ${calculator.sum(3,7)} ${calculator.multiply(3,7)} `)

//Q7 





//Q8



var readIntegers = fs.readFileSync('./test.txt', 'utf8');
var str = new String(readIntegers);
var arr = str.split(",").map((item)=>{
    return parseInt(item , 10);
});
var sum = 0;
for(var i in arr){
  sum = sum + arr[i] ;
}

//console.log(arr);
console.log(sum)

//Q9





//q13
var x = process.argv.slice(2);

console.log(`Hello ${x}`);


