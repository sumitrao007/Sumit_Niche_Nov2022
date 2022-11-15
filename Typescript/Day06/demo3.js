//Shallow copy & deep copy
// by default variable is deep copy
var a = 10;
var b = a;
// console.log(`
//         a is ${a}
//         b is ${b}
// `)
// b=30;
// console.log(`
//         a is ${a}
//         b is ${b}
// `)
// let arr=[10,22,45,63];
// let arr1=arr;
// console.log(`
//     arr= ${arr}
//     arr1= ${arr1}
// `)
// arr1[0]=200;
// console.log(`
//     arr= ${arr}
//     arr1= ${arr1}
// `)
var a1 = [78, 90, 63, 55];
var a2 = a1.slice(0);
console.log("\n    a1 =".concat(a1, "\n    a2 =").concat(a2, "\n"));
a2[0] = 900;
console.log("\n    a1 =".concat(a1, "\n    a2 =").concat(a2, "\n"));
