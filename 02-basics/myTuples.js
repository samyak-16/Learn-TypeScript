// Tuples : -< modified array with extra features 
// In  arrays in ts there is no restriction for types in a specific index to an array 
//For eg :
// const user : (string | number )[]  = ["samyak",2,]
// const user : (string | number )[]  = [2,"samyak",] 
// We can solve that using tuples in ts : As ,
var user = ["samyak", true, 55]; // totally working as expected 
// const user1 : [string,boolean,number] = [true , "samyak" , 55] ; // this throws an type error cause index wise type deceleration doesn't match :) 
var rgb = [2.55, 3.55, 6.564]; // Works fine 
var newUser = [12345, "example@samyak.com"];
newUser[0] = 255;
newUser[1] = "test@email.com";
newUser.push("sam"); // We can hack tuples using arrays metthods 😂
console.log(newUser);
