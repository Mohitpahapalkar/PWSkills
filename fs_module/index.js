const fs=require('fs');
//1.Method of Read
//Asynchronous way to read file
fs.readFile('input.txt',function(err,data) {
if(err){
    console.log(err);
}
console.log('Data :',data);
console.log('Readable Data:',data.toString());
console.log("READ END");
return data;

});

//synchronous way to read a file

var data=fs.readFileSync('input.txt');
console.log('Data :',data);
console.log('Readable Data:',data.toString());
console.log("read end");

//2.Method of Read
//read>open+read
const buff=new Buffer(1024);
fs.open('input.txt','r+',function(err,fd){
if(err){
    console.log('Error opening file ',err);
}
console.log("File open succesfull");
fs.read(fd,buff,0,buff.length,4,function(err,bytes){
    if(err){
        console.log("error reading the files");
    }
    console.log('Data :',bytes);
})
})


//METHOD OF WRITING

// //WRITING TO FILE
// fs.writeFile('input.txt','CDAC',function(err){
//     if(err){
//         console.log("Error in writing file");
//     }
//     else{
//         console.log("Success in writing file");
//     }
// });

//APENDING TO FILE
fs.appendFile('input.txt','--Mohit Pahapalkar','utf8',function(err){
    if(err){
        console.log("Error in writing file");
    }
    else{
        console.log("Success in writing File");
    }
})

//Deleting a file

fs.unlink('input.txt',function(err){
    if(err){console.log("Error in Deleting File");}
    else
    {console.log("Success in Deleting File");}
});
