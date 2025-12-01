function detectType (val : number | string){
if(typeof val==="string"){
    return val.toUpperCase()
}
return val + 2

}

function provideId(id:string|null){

if(!id){
console.log("Please provide Id");
return ; 
}
}

// function printAll(strs: string | string[] | null) {
//   if (typeof strs === "object") {
//     for (const s of strs) {
// // 'strs' is possibly 'null'.
//       console.log(s);
//     }
//   } else if (typeof strs === "string") {
//     console.log(strs);
//   } else { 
//     // do nothing
//   }
// }
