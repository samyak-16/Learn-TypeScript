function getSearchProducts<T>(products:T[]):T|undefined{
return products[0] 
}

const getMoreSearchProducts =<T,>(products:T[]):T|undefined => {
return  products[5]
}


// <T> 
// <T,> 
// Both are correct , we can find many of them in code base using <T,>




//! extends in generics is constraints not inheritance as in classes 
// for example : 

// 1)
// Create a generic function that returns the value of a given key from an object, but ONLY if that key exists on the object.
// If the key does not exist → TypeScript should show an error.

// Example usage:

// Input: { a: 10, b: 20 } and "a" → returns 10

// "c" should show an error.


function pickup<T , K extends keyof T>(obj:T , key:K):T[K]{
return obj[key] 
}


type User = { 
    name : string ; 
    age: number ; 
    email : string ; 
}

const result  =  pickup({name  : 'samyak raj subedi' , age:17 , email:"sam@gmail.com"},"name") // Works fine 
const result2  =  pickup({name  : 'samyak raj subedi' , age:17 , email:"sam@gmail.com"},"age") // Works fine 

console.log(result);
