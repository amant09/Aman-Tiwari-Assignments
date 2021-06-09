//q1


var Rectangle = function(width , height){
    this.height = height;
    this.width = width;
    this.getArea = function(){
        document.write(" The Area of Rectangle is " + width*height);

    };
}

Rectangle.prototype.getArea = function(){ 
    document.write(" The Area of Rectangle is " + this.width*this.height );
    return (this.width)*(this.height);
    

};

var newPerson = {
    firstName : "Aman", lastName : " Tiwari" ,
    middleName : " Kumar"
};
document.write(newPerson.firstName);

document.write(newPerson.middleName);
document.write(newPerson.lastName = " singh");



var myString = {firstName : "Aman", 
            lastName : " Tiwari"};

var r1 = new Rectangle(5 , 4);
r1.getArea();



//Q2

var Person = function(fname, lname, age , skills , dateofbirth  , address ,married , profession){

    this.fname = fname;
    this.lname = lname;
    this.age = age;
    this.skills = skills;
    this.dateofbirth = dateofbirth;
    this.address = address
    this.married= married;
    this.profession= profession;

}
var person1 = new Person("nikhil" , "goud", 23, ["c", "cpp"], "09/09/1997",
{ city:"hyderabad" , pincode: 454545}, true , "actor");


var person2 = new Person("Aman" , "Tiwari", 33, ["c", "OOPs"], "09/09/1987",
{ city:"jabalpur" , pincode: 754545}, false , "Software Er.");


var print = function(){

    console.log(person1);
    console.log(person2);
}();
console.log(person2.age);


//Q4
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









