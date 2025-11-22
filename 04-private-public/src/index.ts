class User{
name : string ;
public email :string ; // can set to public but by default its public :) 
private readonly password : string ; 
constructor(name:string,email:string,password:string){
this.name  = name ; 
this.email = email;
this.password = password ;
}
}

class User1 {
    constructor(public name:string, public email:string, private readonly password:string) { 
    }
}

//  Here User is declared using a manual property declearation , to we need to define types for the properties and also instalize them using this keyword but if we use public private in constructor itself we dont need to to manually declare property and its types :)  





const samyak = new User("samyak", "samyak@1234.com", "CLNMBjhbv!!(&B@")
const pranika = new User1("pranika", "pranika@1234.com", "CLNMBjhbv!!(B@")

console.log(samyak.name);
console.log(samyak.email);
// console.log(samyak.password); // cant access it cause it private 

console.log(pranika.name )
console.log(pranika.email)
