//function declaration

function hello(){
    console.log("Hello");
}
hello();



//function with parameters

function para(a=20,b=30){
    return a+b;

}

let sum=para(0,5);
console.log(sum);

//functions with unlimited no of parameters
//arguments keyword can be used
function sumOfAll(){
    let sum=0;
    for (let i=0;i<arguments.length;i++) sum+=arguments[i];
    return sum;
}

let result=sumOfAll(1,2,3,4,5,6,7,8);
console.log(result);
//OUTPUT:36


//Arrow functions 
//came in ECMA6

const square=(x)=>x*x;

const sumOfTwoNumbers=(x,y)=>x+y;
//returning objects
const sumAndDifference=(x,y)=>({sum:x+y,difference:x-y});

let output1=square(5);
let output2=sumOfTwoNumbers(2,3);
let output3=sumAndDifference(10,5);

console.log(output1);
console.log(output2);
console.log(output3);


//Anonymous functions
let x=function() {
console.log("Anonymous_function");
}
x();


//immediatelyinvoked function
(function (y){
console.log(y*y);
})(5);


(function exec(c)
{
    console.log(c*c);
    
})(6);

