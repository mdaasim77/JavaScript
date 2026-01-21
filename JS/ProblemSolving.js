/*
TASK:
1. Get only active users
2. From them, get users age >= 18
3. Return ONLY their names
4. Do NOT mutate original array
*/

const users = [
  { id: 1, name: "Aasim", age: 20, active: true },
  { id: 2, name: "Raza", age: 17, active: false },
  { id: 3, name: "Ali", age: 25, active: true },
];

let result = users.filter((user) => user.active);
let voter = users.filter((aged) => aged.age === 18);

console.log(result);
console.log(voter);
