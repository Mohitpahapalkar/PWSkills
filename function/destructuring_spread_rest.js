//concatinating two Array using CONCAT
const a=[1,2,3,4];
const b=[5,6,7,8];
const c=a.concat(b);
console.log(c);

//REST operator and SPREAD OPERATOR
const d=[...a,...b];//spread operator spreads the elements
console.log(d);

//function 
function manyArguments(){
    let args=Array.from(arguments);//converting arguments to array
    let newargs=args.map((e)=>e);
    console.log(newargs);
}manyArguments(1,2);

function manyArgumentsv2(...args)//rest operator combines elements as arguments into array
{
    let newargs=args.map((e)=>e);
    console.log(newargs);
}
manyArguments(1,2,3,4);

//rest operator takes up your value and packs it inside an operator

