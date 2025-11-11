function addTwo(num : number):number{
//  num.toUpperCase()
 return num+2;
// return "hello"

}
function getUpper(str : String):string{
//  num.toUpperCase()
 return str.toUpperCase()
}

function signup(name:string , email:string,password:string,isPaid :boolean):string{
return "SignedUp"
}

// function getValue(myVal:number):boolean{
// if(myVal>5){

//     return true
// }
// else {
//     return "400 BAD REQUEST"
// }
// }

const sum = (n:number,n1:number) :number =>{
return n+n1
}
const consoleError = (err:string):void=>{
console.log(err);

}


const handleError = (err:string):never=>{
throw new Error(err)

}



// handleError("Fuck You")
consoleError("Initilazatiuon Error")
console.log(signup("Samyak","samyakraj123456@gmail.com","abcd@1234",false));
console.log(sum(5,5));

console.log(addTwo(55));
console.log(getUpper("samyak"))
export {}