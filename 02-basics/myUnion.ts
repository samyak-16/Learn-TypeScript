let score : number | string | boolean = 55;

score = 55 ;
score = "55";
score = true ;


type Admin = {
    name : string  ; 
    id : string ;
}
type User = {
    username : string  ; 
    id : string ;
}

const samyak : User | Admin = {
    id : "123456" ,
    name : "SamyakSubedi",
}
console.log(samyak);


// function getDbId(id: string | number){
    // // making api calls complex code :)
    // console.log(id);
    
    // }
    // getDbId(true) // Error
    getDbId(55); 
    getDbId("55")
    
    function getDbId(id: string | number){
    // id.toLowerCase() // Error 
            if(typeof(id)==='string'){
                 id.toLowerCase() ;
            }
            else{
                id+2 ;
            }
    
    }


    // Arrays 

    const data1 : number[] = [1,2,34,55,]
    const data2 : string[] = ["1","2"]
    // const data3 : number[] | string[] = [1,2,34,55,"555" ,"11111"] // ts assumes that either all data are either string or all data are number but they cant be mixed up
     const data4 : (number | string)[]= [1,2,3,4,5,"5","5555"] // data can be mixture of number and arrays ;


     //Enums 


     let pi : 3.14  ;
     pi = 3.14 ; 
    //  pi = 3.145 // Error

    let seatAllocations  : "aisle" | "middle" | "window" ;
    seatAllocations  = "middle" ;
    // seatAllocations = "crew" ; //Error


let currentOrder:string|unde ; 
    const orders=["12","13","18","20"]
    for(let order of orders){
            if(order==="18"){
            currentOrder = order ;
            }
            currentOrder = "smtg" ;
    }

    console.log(currentOrder);
    
export {}