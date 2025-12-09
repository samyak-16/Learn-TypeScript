let response: any = '42';
let numericLength: number = (response as string).length;
console.log(numericLength);

type Book = {
  name: string;
};
let bookString = `{"name":"One Thing"}`;

let bookObject = JSON.parse(bookString) as Book;

console.log(bookObject.name);

//! Type Assertion : Forcefully annotate -->

//! Type Assertion = Manually telling TS what the type is.

//!  Some use cases :-

const inputElement = document.getElementById('username') as HTMLInputElement;
