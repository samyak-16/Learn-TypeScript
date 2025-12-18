//Arrays[]

const chaiDlavours: string[] = ['Malasala Chai', 'Adrak'];
const chaiPrice: number[] = [10, 20];
const rating: Array<number> = [4.5, 5.0];

type Chai = {
  name: string;
  price: number;
};

const menu: Chai[] = [
  { name: 'Masala Chai', price: 25 },
  { name: 'Adrak Chai', price: 30 },
];

//readonly

const cities: readonly string[] = ['delhi', 'jaipur'];
// cities.push("hello")//! Error

//Multi-Dimensional Array
const table: number[][] = [
  [1, 2, 3],
  [1, 2, 4, 5],
];

//Tuples[]

const location: readonly [number, number] = [20.6, 32.22];

//! named Tuples

const chaiItems: [name: string, price: number] = ['sam', 100000];

//! Nested Tuples

type NestedTuple = [string, [number, string], number];

const nestedTuple: NestedTuple = ['sam', [1, 's'], 5];

//! Enums

enum CupSize {
  SMALL,
  MEDIUM,
  LARGE,
}

const size = CupSize.LARGE;

enum Status {
  PENDING = 100,
  SERVED, //101
  CANCELLED, //102
}

enum ChaiType {
  MASALA = 'masala',
  GINGER = 'ginger',
}

function makeChai(type: ChaiType) {
  console.log(`Making ${type}`);
}

makeChai(ChaiType.GINGER);
// makeChai("masala")//! Error

enum RandomEnum {
  ID = 1,
  NAME = 'chai',
}

//! Constant enum

const enum Sugars {
  LOW = 1,
  MEDIUM = 2,
  HIGH = 3,
}

const s = Sugars.LOW;

let t: [string, number] = ['chai', 10];
t.push('extras'); //Works fine but shouldn't use it
