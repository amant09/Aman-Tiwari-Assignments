/*function greetPerson(name: string){
    if(name === "Aman"){
        var greet = "Hello Aman"
    }else{
        var greet = "Hi There"
    }
    console.log(greet);
}
greetPerson("Aman");*/

//Question1

const myVar = 10;
myVar = 21; // displays error

//Q 2
let myVar2 = 2;
if(myVar2 === 2){
    let myVar3 = 4;
}
console.log(myVar3)  // logs error myVar3 not defined


//Q 3
let Order = {
    id : 101 ,
    title : "Mobile" ,
    price : 450 ,
    getPrice : function(){
        console.log(Order.price);
    },
    printOrder : function(){
        console.log( "You have placed an order for " + Order.title);
        
    }
};

Order.getPrice();
Order.printOrder();


var newOrder = Object.assign({} , Order);
console.log(newOrder);

//Q 4
let arr = ["aman" , "suresh" , "nikhil" , "tanu" , "nikki"];
const mappedArr = arr.map(value => {
    return {
      name: value,
      length: value.length
    }
  });
 
  console.log(mappedArr);


//Q5 a)
 
let add = (x=1 , y=2) => x+y
 console.log(add());
 console.log(add(4,5));
 console.log(add(undefined , 5));
     

//Q5 b

/*let userFriends =function( message,  ...arrayOfFriend) {
    console.log(username);
    console.log(message = "List of Friends");
    for ( let x in arrayOfFriend){
        console.log(arrayOfFriend[x])
    }
}

let username = "Aman";
userFriends( 'aman', 'suresh');

// Q5 c

let printCapitalNames = function(){
    for (let i in arr){
        console.log(arr[i].toLocaleUpperCase())
        
    }
    
}
printCapitalNames(...arr);





//Q6

let laptopModel = "HP PROBOOK 667 G5";
let deskNo = 123;
let myName = "Aman Tiwari";
console.log(`This is to inform you about an issue with my laptop ${laptopModel} the space key is not working.
My name is ${myName}.
Desk Number ${deskNo}`);


//Q7 a

let arr1 = ['aman' , 'tiwari' ,'male','indian'];
let [fname , lname , gender , nationality] = arr1;
console.log(gender);

//Q7 b

let organisation ={
    nameofOrg : "PASHA Motors",
    address : {
        city: 'Jabalpur',
        pincode: 482020
    }

};
let {nameofOrg , address} = organisation ;
let { city ,pincode}= address;

console.log(pincode);


//Q8


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

console.log(A1);



