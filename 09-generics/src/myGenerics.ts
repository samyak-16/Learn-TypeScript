const score :   Array<number> = []
const names :   Array<string> = []
console.log(score);



function identityOne(val:boolean|number):boolean | number{
return  val
}

function identityTwo(val:any):any{
return  val
}

function identityThree<Type>(val : Type):Type{
return val
}
identityThree("Samyak")
function identityFour<T>(val : T):T{  // Shortcut syntax
return val
}
identityFour("Pranika")

interface Bottel {
    brand : string  ; 
    price : number ;  
    type : string ; 
}

console.log(identityFour<Bottel>({brand : "cello" , price : 1400 , type: "Gym"}));

