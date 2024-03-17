let myHeroes=["thor","spiderman"];
let dcHeroes=["superman","batman","flash"];

let heroPower={
    thor:"hammer",
    spiderman :"sling",

    getSpidermanPower: function(){
        console.log(`spidy power is ${this.spiderman}`);}
}

Object.prototype.hitesh=function(){
    console.log(`Hitesh is present in all objects`);
}

myHeroes.hitesh();
heroPower.getSpidermanPower();

Array.prototype.heyHitesh=function(){
    console.log("heyHitesh is present in all array object");
}

myHeroes.heyHitesh();//this function is present in all array objects

//Inheritance

const user={
    name : "top name",
    email :"top@gmail.com"
}

const Teacher={
    makeVideos : true
}

const TeachingSupport={
    isAvailable: false
}

const TAAssistant={
    makeAssignment : "Js Assignment",
    fulltime :true,
    __proto__: TeachingSupport//Inherited all properties of Teaching support
                             //This is older version of Inheritance
}

console.log(TAAssistant.isAvailable);

//Newer version of inheritance

Object.setPrototypeOf(TeachingSupport,Teacher);//inherited properties of teacher by teachingsupport
console.log(TeachingSupport.makeVideos);

String.prototype.truelength=function(){
    console.log(`True length is ${this.trim().length}`);
}

"Mohit      ".truelength();
