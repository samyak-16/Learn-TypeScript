type ChaiOrder = { type: string; sugar: string; strong: boolean };

function makeChai(order: ChaiOrder) {
  console.log(order);
}
function serveChai(order: ChaiOrder) {
  console.log(order);
}

// type TeaRecipe = {
//   water: number;
//   milk: number;
// };
interface TeaRecipe {
  water: number;
  milk: number;
}

class MasalaChai implements TeaRecipe {
  water = 100;
  milk = 10;
}

const x = new MasalaChai();
console.log(x.water);
console.log(x.milk);

//! Incorrect
// type CupSize = 'small' | 'large';

// class Chai implements CupSize {

// }

interface CupSize {
  size: 'small' | 'large';
}

class Chai implements CupSize {
  size: 'small' | 'large' = 'large';
}

type Response = { ok: true } | { ok: false }; // it's a union type

//! implements expects an object type (or interface), not a union

// class myRes implements Response{
// ok: boolean = true;
// }

//Union Type
type TeaType = 'masala' | 'ginger' | 'lemon';

function orderChai(t: TeaType) {
  console.log(t);
}

//Intersection

type BaseChai = { teaLeaves: number };
type Extra = { masala: number };

type MasalaaChai = BaseChai & Extra;

const cup: MasalaaChai = {
  masala: 4,
  teaLeaves: 5,
};

//Optional values

type User = {
  username: string;
  bio?: string;
};

const u1: User = {
  username: 'samXcodes',
};
const u2: User = {
  username: 'pranikaXcodes',
  bio: 'I love samyak very much',
};

// ReadOnly values

type Config = {
  readonly appName: string;
  version: number;
};

const cfg: Config = {
  appName: 'Masterji',
  version: 1,
};

// cfg.appName = "da" //! Error cant re assign cause it readonly
cfg.version = 5; //* Can reassign :)
