// ⭐ OBJECT QUESTIONS

// 1️⃣ Create an object for a car with brand, model, and price. Print the model.

// let car = {
//   brand: "Toyota",
//   model: "Fortuner 2025",
//   price: 5400000,
// };

// console.log(car.model, "Price is =", car.price);

// 2️⃣ Add a new property "color" to an existing object.

// let car = {
//   brand: "Toyota",
//   model: "Fortuner 2025",
//   price: 5400000,
// };

// car.color = "White";

// console.log(car);

// 3️⃣ Change the value of "model" in a car object.

// let car = {
//   brand: "Toyota",
//   model: "Fortuner 2025",
//   price: 5400000,
// };

// car.model = "Camery 2024";
// console.log(car);

// 4️⃣ Delete the "price" property from an object.

// let car = {
//   brand: "Toyota",
//   model: "Fortuner 2025",
//   price: 5400000,
// };

// delete car.price;

// console.log(car);

// 5️⃣ Check if an object contains a key "color".

// let car = {
//   brand: "Toyota",
//   model: "Fortuner 2025",
//   price: 5400000,
//   color: "White",
// };

// console.log("color" in car);

// 6️⃣ Print all keys

// let car = {
//   brand: "Toyota",
//   model: "Fortuner 2025",
//   price: 5400000,
//   color: "White",
// };

// for (let key in car) {
//   console.log(key);
// }

// 7️⃣ Print all values

// let car = {
//   brand: "Toyota",
//   model: "Fortuner 2025",
//   price: 5400000,
//   color: "White",
// };

// for (let value in car) {
//   console.log(car[value]);
// }

// 8️⃣ Convert keys to array

// let car = {
//   brand: "Toyota",
//   model: "Fortuner 2025",
//   price: 5400000,
//   color: "White",
// };

// console.log(Object.keys(car));

// 9️⃣ Convert values to array

// let car = {
//   brand: "Toyota",
//   model: "Fortuner 2025",
//   price: 5400000,
//   color: "White",
// };

// console.log(Object.values(car));

// 🔟 Merge two objects

let car = {
  brand: "Toyota",
  model: "Fortuner 2025",
  price: 5400000,
  color: "White",
};
let person = {
  name: "Aasim",
  age: 24,
  height: 5.8,
  city: "Noida",
};

let vehicle = { ...car, ...person };

console.log(vehicle);
