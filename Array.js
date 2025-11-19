console.log("My name is Aasim");

// ⭐ Basic Array Questions.....................................................

// 1. Create an array of 5 fruits and print the second fruit...........................

// let fruit = ["Apple", "Banana", "Mango", "Grapes", "Orange"];

// console.log(fruit[1]);

// 2. Replace the 3rd item of an array with a new value................................

// let fruit = ["Apple", "Banana", "Mango", "Grapes", "Orange"];

// let chng = fruit.splice(2, 1, "Gauvava");

// console.log(chng);     // deleted item Mango
// console.log(fruit);    // changed array

// 3. Find the length of an array.................................................

// let fruit = ["Apple", "Banana", "Mango", "Grapes", "Orange"];

// fruit.length;

// console.log(fruit);

// 4. Add an item at the end of an array using push().................................................

// let fruit = ["Apple", "Banana", "Mango", "Grapes", "Orange"];

// fruit.push("Litchi");

// console.log(fruit);

// 5. Remove the first item using shift().................................................

// let fruit = ["Apple", "Banana", "Mango", "Grapes", "Orange"];

// fruit.shift();

// console.log(fruit);

// 6. Copy the first 3 items of an array using slice().................................................

// let fruit = ["Apple", "Banana", "Mango", "Grapes", "Orange"];

// let slicee = fruit.slice(0, 3);

// console.log(slicee);

// 7. Add two new items at index 2 using splice().................................................

// let fruit = ["Apple", "Banana", "Mango", "Grapes", "Orange"];

// fruit.splice(2, 0, "one", "two");

// console.log(fruit);

// 8. Reverse an array without using reverse().................................................

// let fruit = ["Apple", "Banana", "Mango", "Grapes", "Orange"];

// let rev = [];

// for (let i = fruit.length - 1; i >= 0; --i) {
//   rev.push(fruit[i]);
// }

// console.log(rev);
// ..............................................................................................................................................................................
// ..............................................................................................................................................................................
// ..............................................................................................................................................................................

// ⭐ Intermediate Array Questions

// 9. Sort an array of numbers using sort()........................................................

// let num = [54, 2, 47, 10, 63, 82, 62];

// num.sort((a, b) => a - b);

// console.log(num);

// 10. Find the largest number in an array using reduce().

// let num = [54, 2, 47, 10, 63, 82, 62, 1, 98, 3];

// let bignum = num.reduce((acc, curr) => {
//   if (acc > curr) {
//     return acc;
//   } else {
//     return curr;
//   }
// });

// console.log(bignum);

// 11. Count how many numbers are greater than 50.........................................................

// let num = [2, 5, 2, 5, 115, 51, 21, 54, 1, 3, 84];

// let count = num.filter((value) => value > 50).length;

// console.log(`${count} numbers are bigger than 50`);

// 12. Given an array of names, print only names that start with “A”........................................................

// let names = ["Aasim", "Bablu", "Submit", "Sahil", "Aakash", "ROhan", "Bunty"];

// let result = names.filter((naam) => naam.startsWith("A"));

// console.log(result);

// 13. Merge two arrays using the spread operator.........................................................

// let names = ["Aasim", "Bablu", "Submit", "Sahil", "Aakash", "ROhan", "Bunty"];

// let num = [2, 5, 2, 5, 115, 51, 21, 54, 1, 3, 84];

// let newarr = [...names, ...num];

// console.log(newarr);

// 14. Remove duplicates from an array.........................................................

// let names = ["Aasim", "Bablu", "Submit", "Sahil", "Aakash", "ROhan", "Bunty"];

// 15. Convert an array into a string using join().........................................................

// let names = ["Aasim", "Bablu", "Submit", "Sahil", "Aakash", "Rohan", "Bunty"];

// let res = names.join(", ");
// console.log(res);
