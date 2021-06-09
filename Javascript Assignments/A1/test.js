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

function parity(b){

     if (b%2 === 0){
        //document.write("Even");
    }
    else{
        //document.write("Odd");
}
}

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


function padChars(a , b){
    for (i=0; i<a; i++){
        document.write(b);
    }

}


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