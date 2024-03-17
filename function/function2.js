//set interval 
// const hello=()=>{
//     console.log("hello world");
// }

//  setInterval(hello,1000);
// setTimeout(hello,3000);

//foreach

let arr=[1,2,3,4];
arr.forEach(function(element){
    console.log(element);
})
arr.forEach(function(element,index,arr){
    console.log(element,index,arr);
})

arr.forEach((el)=>{
    console.log(el);
})

//FOR_EACH
let arr2=["SANKET","ANAND","PADRE"];
const newnames=arr2.forEach((el,index,array)=>{array[index]=el;});
console.log(newnames);
 console.log(arr2);


//MAP
let arr3=["MOHIT","PAHAPALKAR"];
const newarr=arr3.map(( names,index,array)=>{array[index]=names+"_bhai";});
console.log(newarr);
console.log(arr3);


//FILTER -FOR ONLY PARTICULAR VALUES IN ARRAY
let heroes=["NAAGRAJ","DOGRAJ","SUPERMAN","SPIDERMAN","BATMAN"];
const heroesWithRaj=heroes.filter((h)=>{
    return h.endsWith('RAJ');
})
console.log(heroesWithRaj);

//reduce
const cart=[10,20,30];
const sumofcart=cart.reduce((prev,curr)=>prev+curr,0);
console.log(sumofcart);

//check if all values are numbers-EVERY
const gameScore=[100,200,300,400];
const gamesScoreCheck=gameScore.every((v)=>typeof v===Number);
console.log("check :",gamesScoreCheck);

//find score above 200-FIND

const above200=gameScore.find((num)=>num>200);
console.log(above200);
