// class Chai {
//   flavour: string;
//   price: number;

//   constructor(flavour: string, price: number) {
//     this.flavour = flavour;
//     this.price = price;
//     console.log(this);
//   }
// }

// const masalachai = new Chai('Ginger', 250);
// masalachai.flavour = 'masala';

//! Access Modifiers

class Chai {
  public flavour: string;
  private price: number;
  private secretIngridents: string = 'Cardamon';
  reveal() {
    return this.secretIngridents;
  }

  constructor(flavour: string, price: number) {
    this.flavour = flavour;
    this.price = price;
    console.log(this);
  }
}

const masalachai = new Chai('Ginger', 250);
masalachai.flavour = 'masala';
console.log(masalachai.reveal());

//! protected

class Shoop {
  protected shopName = 'Chai corner';
}
class Branch extends Shoop {
  getName() {
    return this.shopName;
  }
}

console.log(new Branch().getName());

//! #--> private
class Walet {
  #balance = 100; //!private
  getBalance() {
    return this.#balance;
  }
}

const w = new Walet().getBalance();

//! readonly

class Cup {
  readonly capacity: number = 250;
  constructor(capacity: number) {
    this.capacity = capacity;
  }
}
// new Cup(210).capacity = 100;//!Error

//! Getter-Setter

class ModernChai {
  private _sugar: number = 2;

  get sugar() {
    return this._sugar;
  }
  set setSugar(value: number) {
    this._sugar = value;
  }
}

const c = new ModernChai();
console.log(c.sugar);
c.setSugar = 5;
console.log(c.sugar);

//! static keyWord :-> static keyword in classes is used to define class-level members—that is, properties or methods that belong to the class itself, not to individual objects (instances) of that class.

class Student {
  static schoolName = 'ABC School';
}
console.log(Student.schoolName); //ABC School

const s1 = new Student();
// s1.schoolName //! schoolName belongs to Student, not to s1.

//! Example

class User {
  static count = 0;
  constructor(public name: string) {
    User.count++;
  }
}

new User('A');
new User('B');
new User('C');
console.log(User.count); //3

//! abstract keyword : An abstract class

//! Cannot be instantiated directly

//! Exists only to be inherited

abstract class Drink {
  abstract make(): void;
}

class MyChai extends Drink {
  make(): void {
    console.log('Brewing chai');
  }
} 
