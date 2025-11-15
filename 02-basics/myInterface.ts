interface User { 
    readonly dbId : number ;
    email : string ;
    userId  : number ; 
    googleId? : string ;
    // startTrial : ()=> string 
    startTrial() :  string ; 
    getCoupon(couponName : string) : number;

}
// Reopning of the interface : 
interface User {
    githubToken: string ; 
}


const samyak  : User = {email : "samyak@email.com" , userId: 1234 , googleId:"id@id.1245^2",dbId : 1234 , startTrial() {
    return "Sam"
},
getCoupon : ()=>{
    return 143
},githubToken:"token123"}


const pranika  : User = {email : "pranika@email.com" , userId: 1234 , dbId:1234658 , startTrial() {
    return "ilovesamyakkk"
},
getCoupon : (xyz:"testttt1234")=>{
    return 416465
},githubToken:"token123"}


// samyak.dbId = "sasas" //Error
// pranika.dbId = "sasas" //Error


interface Admin extends User {
    role : "admin" | "ta" | "learner"
}
const admin : Admin = {
    role : "learner" , 
    dbId : 123456 , 
    email : "xyz@gmail.com" ,
    getCoupon  : ()=>{
        return 124 ; 
    } , 
    githubToken : "01234" , 
    startTrial : ()=> {
        return "1464"
    },
    userId :1364654

}
export {}