let emptySet=new Set();
console.log(emptySet.size);

let myArray=[1,2,3,4,4,3];//SET stores the unique value 
let newSet=new Set(myArray);
console.log(newSet);
newSet.add(6);
console.log(newSet);
// newSet.clear();
// console.log(newSet);


//  SET-DIFFERENCE

let setA= new Set([1,2,3,4,5]);
let setB=new Set([2,3,4,5,6]);
function setDifference(setA ,setB){
    const newSetC= new Set([...setA].filter((el)=> !setB.has(el)));
return newSetC;
}

console.log(setDifference(setA,setB));


// MAP

let map=new Map();
console.log(map.size);

let arr= [[1,"Mithun"],[2,"Andy"],[3,"Harish"],[4,"Mohit"]];

arr.map((array)=>map.set(array[0],array[1]));

console.log(map);
