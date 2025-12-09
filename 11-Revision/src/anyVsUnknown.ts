//! Unknown  vs Any

function testAny(smtg: any) {
  console.log(smtg.toUpperCase()); // Shows no any error on calling a method of any primitive type   :)
}

// function testUnknown(smtg: unknown) {
//   console.log(smtg.toUpperCase()); // Shows error when trying to call .toUpperCase() casue we still don't know the type of smtg ,
// }

// function testUnknown(smtg: unknown) {
//   console.log(smtg.toUpperCase()); // Shows error when trying to call .toUpperCase() casue we still don't know the type of smtg ,
// }

function testUnknown(smtg: unknown) {
  if (typeof smtg === 'string') {
    console.log(smtg.toUpperCase()); //Works fine cause we know the type of smtg is string when calling .toString()
  }
}

// 🧵 SIMPLE SUMMARY
// any = “I don’t care, let me do whatever” (unsafe)
// unknown = “I don’t know, so check first” (safe)

// unknown = a value whose type is not known yet, so TypeScript forces you to check before using it.
