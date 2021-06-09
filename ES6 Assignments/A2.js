//1.
class fibo{
    #previousNo=1;
    #currentNo=2;
    next(){
        return(this.#previousNo+this.#currentNo);
    }
}
let fib=new fibo();
console.log(fib.next());

 

//2.
function nextArmstrongNo(Number){

    console.log ('Armstrong Numbers:');
    // looping through lowNumber to infinity
    for (let i = Number; ; i++) {
        // converting number to string 
        let numberOfDigits = i.toString().length;
        let sum = 0;
        // create a temporary variable
        let temp = i;
        /* loop through a number to find if 
        a number is an Armstrong number */
        while (temp > 0) {
            let remainder = temp % 10;
            sum += remainder ** numberOfDigits;
            // removing last digit from the number
            temp = parseInt(temp / 10); // convert float into integer
        }
         if (sum == i) {
            console.log(i);
            break;
        }
    }
}

 

//3.
function nextArmstrongNo(Number){

    console.log ('Armstrong Numbers:');
    // looping through lowNumber to infinity
    for (let i = Number;i<=1000 ; i++) {
        // converting number to string 
        let numberOfDigits = i.toString().length;
        let sum = 0;
        // create a temporary variable
        let temp = i;
        /* loop through a number to find if 
        a number is an Armstrong number */
        while (temp > 0) {
            let remainder = temp % 10;
            sum += remainder ** numberOfDigits;
            // removing last digit from the number
            temp = parseInt(temp / 10); // convert float into integer
        }
         if (sum == i) {
            console.log(i);
            break;
        }
        if(i==1000){
            i=0;
        }
    }
}