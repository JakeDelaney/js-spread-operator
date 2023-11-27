/**
 * To run this file in Gitpod, use the 
 * command node the-spread-operator.js in the terminal
 */

// No spread operator
let arr1 = [1,2,3];;
let arr2 = arr1;
arr2.push(8);
console.log("Array 1", arr1);
console.log("Array 2", arr2);

// Copying an array
let arr3 = [4,5,6];
let arr4 = [...arr3];
arr4.push(12);
console.log("Array 3", arr3);
console.log("Array 4", arr4);

// Copying an object
let obj1 = {a: 1, b: 2, c: 3};
let obj2 = {...obj1, d: 4};
let obj3 = {...obj1, b: 7};
console.log("Object 1", obj1);
console.log("Object 2", obj2);
console.log("Object 3", obj3);

// Copying only part of an array/object
let arr5 = [...arr1, {...obj1, }, ...arr3, "X", "Y", "Z"]
console.log("Array 5", arr5)
