function getChai(kind: string | number) {
  if (typeof kind === 'string') {
    return `Making ${kind.toUpperCase()} chai`;
  }
  return `Chai order : ${kind}`;
}
function log(x: number | string) {
  if (typeof x === 'string') {
    // narrowed to string
    console.log(x.toUpperCase());
  } else {
    // narrowed to number
    console.log(x.toFixed());
  }
}

function serveChai(msg?: string) {
  if (msg) {
    return `Serving ${msg}`;
  }
  return `Serving default masala chai`;
}

function orderChai(size: 'small' | 'medium' | 'large') {
  if (size === 'small') {
    return `small cutting chai...`;
  } else if (size === 'medium') {
    return `make extra chai`;
  }

  return `make more extra chai`;
}

class kulhadChai {
  serveKulhadChai() {
    return `Serving kulhad Chai`;
  }
}

class cuttingChai {
  serveCuttingChai() {
    return `Serving cutting Chai`;
  }
}

function serve(chai: kulhadChai | cuttingChai) {
  if (chai instanceof kulhadChai) {
    console.log(chai.serveKulhadChai());
  } else {
    console.log(chai.serveCuttingChai());
  }
}

type chaiOrder = {
  type: string;
  sugar: number;
};

function isChaiOrder(obj: any): obj is chaiOrder {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    typeof obj.type === 'string' &&
    typeof obj.sugar === 'number'
  );
}

//!Here we get suggestions for obj methods cause if the functions returns true the obj is the type of chaiOrder

// function serveCustomer(obj: any) {
//   if (isChaiOrder(obj)) {
//     console.log(obj.);

//   }
// }

//!But here its the type of any so ts cant show suggestions of obj's methods :)

function serveCustomer(obj: any) {
  //   console.log(obj.);
}

