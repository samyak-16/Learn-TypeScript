class User  {
    email   : string ; 
    name  : string ;
    readonly city : string = "";
    constructor (email:string,name:string){
        this.email = email;
        this.name = name;
    }
}


const samyak =  new User("subscriptionsamyakop@gmail.com","Samyak Raj Subedi")      

console.log(samyak.name);
console.log(samyak.email);
// samyak.city = "Biratnagar"  // Error as city is set as readonly 
console.log(samyak.city);
