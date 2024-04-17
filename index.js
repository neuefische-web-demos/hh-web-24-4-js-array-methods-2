console.clear();

// Wir kennen schon forEach, filter und map
// Jetzt kieken wir uns includes und find an
// Es gibt noch mehr z.B.: sort, reduce, findIndex, some

const numbers = ["x", "y", "bla", "string x"];
const brokkoli = "Dominik";

const isInArray = numbers.includes("string");
const isInString = brokkoli.includes("D");

console.log(isInString);

const x = numbers.filter((number) => {
  return number.includes("bla");
});

console.log(x);

// Als nächstes: find();

const users = [
  { id: "a", name: "Domi", age: 19 },
  { id: "b", name: "Dirk", age: 10 },
  { id: "c", name: "Gerda", age: 10 },
];

const is10YearsOld = users.find((user) => {
  return user.age === 10;
});

console.log(is10YearsOld);

const flowers = [
  { id: "a", name: "Rhododendron" },
  { id: "b", name: "Sunflower" },
  { id: "c", name: "Rose" },
];

const nurNames = flowers.map((flower) => {
  return flower.name;
});

console.log(nurNames);

// Entry where the name contains  the letter "f"

const withF = flowers.find((flower) => {
  return flower.name.includes("f");
});

console.log(withF.name);
