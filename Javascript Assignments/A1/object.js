var Rectangle = function(width , height){
    this.height = height;
    this.width = width;
    //this.getArea = function(){
        //document.write(" The Area of Rectangle is " + width*height);

    //};
}

Rectangle.prototype.getArea = function(){ 
    document.write(" The Area of Rectangle is " + this.width*this.height );
    //return (this.width)*(this.height);
    

};

var newPerson = {
    firstName : "Aman", lastName : " Tiwari" ,
    middleName : " Kumar"
};
//document.write(newPerson.firstName);

//document.write(newPerson.middleName);
//document.write(newPerson.lastName = " singh");



/*var myString = {firstName : "Aman", 
            lastName : " Tiwari"};

var r1 = new Rectangle(5 , 4);
r1.getArea();*/



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









