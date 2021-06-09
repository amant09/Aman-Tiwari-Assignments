//1

var x=0,you=0,sum=0;
const valOfX= new Promise((resolve)=>{
    x=2;
    resolve(x)
}  )

const valOfY= new Promise((resolve)=>{
    you=3;
    resolve(you)
}  )

Promise.all([valOfX,valOfY]).then(() =>{
        sum+=x;
        console.log(x);
    }).then(() =>{
         sum+=you;
        console.log(you);
    }).then(() =>{
        console.log(sum)
    })


//2



class Account{
  
    constructor(id, name , balance){
        this.id = id;
        this.name = name;
        this.balance = balance;
    }

   
}

class SavingAccount extends Account{

    constructor(id , name , balance , intrest){
        super(id,name,balance);
        this.intrest =intrest;
    }
}

class CurrentAccount extends Account{
    constructor(id , name , balance , cashCredit){
        super(id,name,balance);
        this.cashCredit=cashCredit;
    }
}

let A1 = new CurrentAccount(101, 'aman', 100, 10);
let A2 = new CurrentAccount(101, 'rohit', 200 , 5);
let A3 = new SavingAccount(101, 'nikhil', 150 , 3);
let A4 = new SavingAccount(101, 'nikki', 250, 7);






//3

interface Printable {
    name: string,
    printAll: (string) => string
}
var circle: Printable = {
    dept: "IT",
    printAll: (str) => { return "Hi" + str }
}
var employee: Printable = {
    name: " xyz",
    printAll: (str) => { return "Hello" + str }
}
console.log(circle.printAll(circle.name))
console.log(employee.printAll(employee.name))
