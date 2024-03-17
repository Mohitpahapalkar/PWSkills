try{
    let x=undefined;
    console.log(x[0]);
}
catch{
console.log("catch executed");
}
finally{
    console.log("finally always gets executed");
}
console.log("end");