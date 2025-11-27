interface Quiz{
    name : string ;
    type : string ; 
}

interface Course{
    name : string ;
    author : string ;
    subject : string 

}

class Sellable <T>{
     public cart : T[] = []

     addToCart(product:T){
        this.cart.push(product)
     }
}


// same class for quiz instance : 
const quizCart   = new Sellable<Quiz>()
quizCart.addToCart({name:"TS Quiz" , type:"Generics"})
console.log(quizCart.cart);


// same class for quiz instance : 
const courseCart = new Sellable<Course>()
courseCart.addToCart({
  name: "TS Masterclass",
  author: "Samyak",
  subject: "Programming"
})
console.log(courseCart.cart);



