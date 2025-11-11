'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
function addTwo(num) {
  //  num.toUpperCase()
  return num + 2;
  // return "hello"
}
function getUpper(str) {
  //  num.toUpperCase()
  return str.toUpperCase();
}
function signup(name, email, password, isPaid) {
  return 'SignedUp';
}
// function getValue(myVal:number):boolean{
// if(myVal>5){
//     return true
// }
// else {
//     return "400 BAD REQUEST"
// }
// }
var sum = function (n, n1) {
  return n + n1;
};
var consoleError = function (err) {
  console.log(err);
};
var handleError = function (err) {
  throw new Error(err);
};
// handleError("Fuck You")
consoleError('Initilazatiuon Error');
console.log(signup('Samyak', 'samyakraj123456@gmail.com', 'abcd@1234', false));
console.log(sum(5, 5));
console.log(addTwo(55));
console.log(getUpper('samyak'));
