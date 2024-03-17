// function h(x,fn){
//     //h->h is a hof
//     //fn ->callback
//     console.log(x*x);
//     fn();
// }

// h(10,function(){
//     console.log("done with callback");
// })
// //Asynchronous piece of code
// setTimeout(function f() {
//     console.log("timer done");
    
// }, 3000);


//promises
function createPromise(){
    return new Promise(function exec(resolve,reject){
        //your code goes here
        setTimeout(function f(){
            console.log("timer done");
            resolve(10);    
        },3000)
    })
}
//microtask queue is for registered promises
//macro task queue are for callaback functions
//microtask will be called first 
console.log("start");
let x=createPromise();
console.log("got a new promise");
x.then(function f(value){ //it is called when promise is resolved
console.log("promise is done",value);    
}).catch(function g(value){
    console.log("handled");
}).finally(function c(){
    console.log("finally");
})
console.log("end");

for(let i=0;i<1000000;i++){
    
}


