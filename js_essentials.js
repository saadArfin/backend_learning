// // 1. forEach

// arr = [1, 2, 3];

// arr.forEach((val) => {
//   console.log(val);
// });

// //or

// arr.forEach(function (val) {
//   console.log(val);
// });

// // 2. map - (returns a new array)
// arr = [1, 2, 3];

// newArr = arr.map((val) => {
//   return val * 3;
// });
// console.log(newArr);

// // 3. filter - (returns a new array)

// arr = [1, 2, 3, 4];

// newArray2 = arr.filter((val) => {
//   return val > 2;
// });
// console.log(newArray2);

// // 4. find - (search for the "first" element in the array we specify, if it's found we return it otherwise returns undefined)

// arr = [2, 5, 19];
// ans = arr.find((val) => {
//   return val == 19;
// });
// console.log(ans);

// // 4. indexOf - In JavaScript, indexOf() is a method used to find the position (index) of a specified value within a string or an array. It returns the index of the first occurrence of the value, or -1 if the value is not found.

// const numbers = [1, 2, 3, 4, 3, 5];
// const firstThree = numbers.indexOf(3); // Returns 2
// const secondThree = numbers.indexOf(3, 3); // Returns 4 (starts searching from index 3)


// 5. fetch

// async function apiCall(){
//     console.log("Hi I am Saad"); 
//     const blob = await fetch(`https://randomuser.me/api/`);
//     const ans = await blob.json();
//     console.log(ans);
// }

// apiCall()

// NOTE 1
// let a = 3

// b = a--

// console.log(a) //2
// console.log(b) //3

// // NOTE 2 

// let likes = 12

// function likekaro(){
//     return ++likes
// }

// console.log(likekaro())
// console.log(likes)

let arr = [4, 6, 2, 3, 1, 5]
arr.sort((a, b) => a - b)
console.log(arr) 

