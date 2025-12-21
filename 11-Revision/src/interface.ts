interface Chai {
  flavor: string;
  price: number;
  milk?: boolean;
}

const masalaChai: Chai = { flavor: 'masala', price: 30 };

interface Shop {
  readonly id: number;
  name: string;
}
const s: Shop = {
  id: 1,
  name: 'ChaiCOde Cafe',
};

// s.id=5 //!Error

//! Structuring a function

interface DiscountCalculator {
  (price: number): number;
}

const apply50: DiscountCalculator = (p) => p * 0.5;

interface TeaMachine {
  start(): void;
  stop(): void;
}

const machine: TeaMachine = {
  start() {
    console.log('start');
  },
  stop() {
    console.log('stop');
  },
};

//! Index Signture

interface ChaiRatings {
  [flavour: string]: number; // How much we want we can give it in key value pairs in this signature --> key can be string and value should be number
}

const ratings: ChaiRatings = {
  masala: 4.5,
  ginger: 4.5,
  black: 4.5,
};

interface User {
  name: string;
}

interface User {
  email: string;
}

interface User {
  password: string;
}
//Multiple  interface withs ame name  combines without an Error
const u1: User = {
  email: 'sam@gmail.com',
  password: 'CLEa',
  name: 'Samyak',
};

interface A {
  a: string;
}
interface B {
  b: string;
}

interface ABC extends A, B {
  c: string;
}

const x: ABC = {
  a: 'A',
  b: 'B',
  c: 'C',
};

//! Generics
