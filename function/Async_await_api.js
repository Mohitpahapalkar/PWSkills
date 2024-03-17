
function createPromise(){
    return new Promise(function exec(resolve,reject){
        //your code goes here
        setTimeout(function f(){
            console.log("timer done");
            resolve(10);    
        },3000)
    })
}
function createPromise2(){
    return new Promise(function exec(resolve,reject){
        //your code goes here
        setTimeout(function f(){
            console.log("timer done");
            reject(10);    
        },3000)
    })
}

//Anything you return through async function will be considered as promise

     async function  consume(){ //inside async function code will be executed line by line
    console.log("inside async function");
    const response=await createPromise();
    console.log("response is",response);
     }
     console.log("start");
     consume();
     console.log("end");


    async function consume2(){
        try {
            console.log("inside async consume 2 ");
            const response2=await createPromise2();
            console.log("resposne is ",response2);
            
        } catch (error) {
            console.log("handled error is",error);
        }
    }
    consume2();