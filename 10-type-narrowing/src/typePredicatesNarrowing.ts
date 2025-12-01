type Fish = {
    swim : ()=>void 
}
type Bird = {
    fly : ()=>void 
}

const pet: Fish | Bird = Math.random() > 0.5
? { swim() {console.log("swimming");
} }
: { fly() {console.log("flying");
} };


// //This gives Error
// function isFish(pet : Fish | Bird):boolean{
//     return ("swim" in pet ) ; 
// }
function isFish(pet : Fish | Bird):pet is Fish{
        return ("swim" in pet ) ; 
    }

if(isFish(pet)){  // pet is Fish telles that : “If this function returns true, then the variable pet should now be treated as Fish inside that block.”
    pet.swim()
    }
