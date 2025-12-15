const chai = {
  name: 'Masala chai',
  price: 20,
  isHot: true,
};

// TS infered types :

//  {
//     name : string ;
//     price : number ;
//     isHot : boolean ;
//  }

let tea: {
  name: string;
  price: number;
  isHot: boolean;
};
tea = {
  name: 'Ginge Tea',
  price: 100,
  isHot: false,
};

type Tea = {
  name: string;
  price: number;
  ingredients: string[];
};

const adrakChai: Tea = {
  name: 'Adrak Chai',
  price: 25,
  ingredients: ['ginger', 'tea leaves'],
};

//Duck Typing

type Cup = { size: string };
let smallCup: Cup = {
  size: '200ml',
};

let bigCup = {
  size: '500ml',
  material: 'steel',
};

smallCup = bigCup; //! No any errors

type Brew = { brewTime: number };
const coffee = { brewTime: 5, beans: 'Arabica' };
const chaiBrew: Brew = coffee; //! No any issue
// const coffee: Brew = { brewTime: 5, beans: 'Arabica' }; //! Issue here

// Splitting out data types

type Items = { name: string; quantity: number };
type Address = { street: string; pin: number };

type Order = {
  id: string;
  items: Items[];
  address: Address;
};

// Partial keyword : > makes all properties in object as optional

type Chai = {
  name: string;
  price: number;
  isHot: boolean;
};

const updateChai = (updates: Partial<Chai>) => {
  console.log('updating chai with ', updates);
};

updateChai({ price: 25 });
updateChai({ isHot: false });
updateChai({}); //! Warning : Can pass empty objects too

type ChaiOrder = {
  name?: string;
  quantity?: number;
};

//Required  : Evem the type has optional properties but if we used the type with Required key word all properties needs to be passed on and is required compulsory
const placeOrder = (order: Required<ChaiOrder>) => {
  console.log('Order : ', order);
};

// placeOrder({}); //!Error
// placeOrder({name:"Black Tea"}); //!Error
// placeOrder({quantity:5}); //!Error
placeOrder({ name: 'Black Tea', quantity: 5 }); //Works fine if all properties are passed

// Pick keyword : kinda Union but with selected properties of another type

type Chiya = {
  name: string;
  price: number;
  isHot: boolean;
  ingredients: string[];
};
type BasicChaiInfo = Pick<Chiya, 'name' | 'price'>;

const chaiInfo: BasicChaiInfo = {
  name: 'lemon Tea',
  price: 25,
};

//Omit keyword :

type ChaiNew = {
  name: string;
  price: number;
  isHot: boolean;
  secretIngredients: string;
};

type PublicChai = Omit<ChaiNew, 'secretIngredients' | 'name'>;

const chai1: PublicChai = { isHot: false, price: 100 };
