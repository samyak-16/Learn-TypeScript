'use strict';
// const User = {
//     name : "Samyak",
//     email : "sam@1234.gmail.com",
//     isActive : false,
// }
Object.defineProperty(exports, '__esModule', { value: true });
var user = {
  _id: '123',
  name: 'samyak',
  isActive: false,
  email: 'samyakraj@gmail.com',
};
user.name = 'ram'; // This is allowed
// user._id = "1234"  Error: Cannot assign to '_id' because it is a read-only property
console.log(user);
