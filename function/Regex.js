let pattern="pw"
let regExOne=new RegExp(pattern);
let regExtwo= /pw/gi;
const strToCheck="pw is growing at a rapid speed and recently they are working on Pwskills";

const result=regExOne.test(strToCheck);
console.log(result);

const anotherResult=strToCheck.match(regExtwo);
console.log(anotherResult);

const replaced=strToCheck.replace(regExtwo,"mh");
console.log(replaced);