// const User = {
//     name : "Samyak",
//     email : "sam@1234.gmail.com",
//     isActive : false,
// }

// function createUser ({name,email,isPaid}:{name : string , email:string , isPaid : boolean}){

// }
// function createCourse():{name:string , price:number}{
//     return {name:"XYZ",price :543}
// }


// createUser({name:"Samyak",email:"samyak@email.com",isPaid:false})


// // Odd Behaviour of ts \

// // createUser({name:"Samyak",email:"samyak@email.com",isPaid:false,age:45}) //--> TS shows red line here and a error cause age was not part of the fn paramater 
// // But we can do like this :
//  let User1 = {name:"Samyak",email:"samyak@email.com",isPaid:false,age:45}
// createUser(User1) //Shows no red bumpy line here , still as we are passing age in the params  



// // Type Aliases

// type myString = string ; // Fun Work 

// type User = {
//     name : string ;
//     email : string ;
//     isActive : boolean;

// }

// function getUser(user : User){
// console.log(user);

// }

// const user1 = {name : "Samyak Raj Subedi" ,email : "samyakrajsubedi@yahoo.com" , isActive:false , password : "aabcd"} // Still password is unnecessary but isn't showing bumpy errors 
// getUser(user1)





type User =  {
    readonly  _id : string ; // can only be set at object creation
    name : string ;
    email : string ;
    isActive : boolean;
    creditCardDetails? : number; // "?" is  used to mark properties as optional 
}

let user : User = {_id : "123" , name : "samyak" , isActive : false , email : "samyakraj@gmail.com",}
user.name = "ram"  // This is allowed
// user._id = "1234"  Error: Cannot assign to '_id' because it is a read-only property


type cardNumber = {

    cardnumber : number ; 
}
type cardDate = {

    carddate : string ; 
}
type creditCardDetails = cardNumber & cardDate & {
    cvv : number
}; // Used to combine many different types to one types 

const card : creditCardDetails = {carddate : "123" , cardnumber : 12, cvv:11445566}


console.log(user);



export {}