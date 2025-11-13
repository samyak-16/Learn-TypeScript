"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var score = 55;
score = 55;
score = "55";
score = true;
var samyak = {
    id: "123456",
    name: "SamyakSubedi",
};
console.log(samyak);
// function getDbId(id: string | number){
// // making api calls complex code :)
// console.log(id);
// }
// getDbId(true) // Error
getDbId(55);
getDbId("55");
function getDbId(id) {
    // id.toLowerCase() // Error 
    if (typeof (id) === 'string') {
        id.toLowerCase();
    }
    else {
        id + 2;
    }
}
// Arrays 
var data1 = [1, 2, 34, 55,];
var data2 = ["1", "2"];
// const data3 : number[] | string[] = [1,2,34,55,"555" ,"11111"] // ts assumes that either all data are either string or all data are number but they cant be mixed up
var data4 = [1, 2, 3, 4, 5, "5", "5555"]; // data can be mixture of number and arrays ;
//Enums 
var pi;
pi = 3.14;
//  pi = 3.145 // Error
var seatAllocations;
seatAllocations = "middle";
