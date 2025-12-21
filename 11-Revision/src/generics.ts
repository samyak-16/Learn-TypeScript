// generics -> General Functions : Used for many datatypes
function wrapInArray<T>(item: T): T[] {
  return [item];
}
const x = wrapInArray<string>('masala');
x[1]?.toLowerCase(); //Gives suggestions

//Can use same fn for more different data types with suggestions

function pair<A, B>(a: A, b: B): [A, B] {
  return [a, b];
  //   return [b, a]; //!Error
}
pair('masala', 20);
pair('masala', { flavour: 'GInger' });

//Generics Interface

interface Box<T> {
  content: T;
}
const numberBox: Box<number> = {
  // content:"Sam" //! TS type Error should be a number
  content: 25, //Works fine
};

//! Examples

interface ApiPromise<T> {
  status: number;
  data: T;
}

const response: ApiPromise<{ flavor: String }> = {
  status: 200,
  data: { flavor: 'sweet' },
};
