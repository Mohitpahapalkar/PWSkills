class Product{
    //properties-->variabels-->data members
    name;
    price;
    #rating;//use to make memeber private
    //there cant be multiple constructors in javascript i.e there is no constructor overloading
    constructor(n,p,r){
        this.name=n;
        this.price=p;
        this.#rating=r;
        console.log("calling the constructor");
        //return 10; if you are returning primitive then it will be avoided in constructor
        //return {x:0,y:20} //if you return non primitive then it will be returned

    }

    //behaviours -> functions ->member functions
    display(){
        console.log("display the current product");
    }
   
    //static function
    static custom(){
        console.log("this is static function")
    }


    //getters and setters
    get ratingGetter(){
        console.log(this.#rating);
    }
    
    set ratingSetter(r){
        this.#rating=r;
    }


}

const p=new Product("iphone",100000,5); //new creates an empty plain object
console.log(p);
p.display();
Product.custom();
p.ratingSetter=5;//calling getter and setter
p.ratingGetter;





