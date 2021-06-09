"use strict";
/*function greetPerson(name: string){
    if(name === "Aman"){
        var greet = "Hello Aman"
    }else{
        var greet = "Hi There"
    }
    console.log(greet);
}
greetPerson("Aman");*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Question1
var myVar = 10;
//myVar = 21;
//Q 2
var myVar2 = 2;
if (myVar2 === 2) {
    var myVar3 = 4;
}
//console.log(myVar3)
//Q 3
/*let Order = {
    id : 101 ,
    title : "Mobile" ,
    price : 450 ,
    getPrice : function(){
        console.log(Order.price);
    },
    printOrder : function(){
        console.log( "You have placed an order for " + Order.title);
        
    }
};*/
//Order.getPrice();
//Order.printOrder();
//var newOrder = Object.assign({} , Order);
//console.log(newOrder);
//Q 4
var arr = ["aman", "suresh", "nikhil", "tanu", "nikki"];
/*const mappedArr = arr.map(value => {
    return {
      name: value,
      length: value.length
    }
  });*/
// console.log(mappedArr);
//Q5 a)
//let add = (x=1 , y=2) => x+y
//console.log(add());
//console.log(add(4,5));
//console.log(add(undefined , 5));
//Q5 b
/*let userFriends =function( message,  ...arrayOfFriend) {
    console.log(username);
    console.log(message = "List of Friends");
    for ( let x in arrayOfFriend){
        console.log(arrayOfFriend[x])
    }
}

let username = "Aman";
userFriends( 'aman', 'suresh');*/
// Q5 c
/*let printCapitalNames = function(){
    for (let i in arr){
        console.log(arr[i].toLocaleUpperCase())
        
    }
    
}
printCapitalNames(...arr);*/
//Q6
/*let laptopModel = "HP PROBOOK 667 G5";
let deskNo = 123;
let myName = "Aman Tiwari";
console.log(`This is to inform you about an issue with my laptop ${laptopModel} the space key is not working.
My name is ${myName}.
Desk Number ${deskNo}`);*/
//Q7 a
//let arr1 = ['aman' , 'tiwari' ,'male','indian'];
//let [fname , lname , gender , nationality] = arr1;
//console.log(gender);
//Q7 b
/*let organisation ={
    nameofOrg : "PASHA Motors",
    address : {
        city: 'Jabalpur',
        pincode: 482020
    }

};
let {nameofOrg , address} = organisation ;
let { city ,pincode}= address;

console.log(pincode);*/
//Q8
var Account = /** @class */ (function () {
    function Account(id, name, balance) {
        this.id = id;
        this.name = name;
        this.balance = balance;
    }
    return Account;
}());
var SavingAccount = /** @class */ (function (_super) {
    __extends(SavingAccount, _super);
    function SavingAccount(id, name, balance, intrest) {
        var _this = _super.call(this, id, name, balance) || this;
        _this.intrest = intrest;
        return _this;
    }
    return SavingAccount;
}(Account));
var CurrentAccount = /** @class */ (function (_super) {
    __extends(CurrentAccount, _super);
    function CurrentAccount(id, name, balance, cashCredit) {
        var _this = _super.call(this, id, name, balance) || this;
        _this.cashCredit = cashCredit;
        return _this;
    }
    return CurrentAccount;
}(Account));
var A1 = new CurrentAccount(101, 'aman', 100, 10);
var A2 = new CurrentAccount(101, 'rohit', 200, 5);
var A3 = new SavingAccount(101, 'nikhil', 150, 3);
var A4 = new SavingAccount(101, 'nikki', 250, 7);
console.log(A1);
//# sourceMappingURL=Assignments.js.map