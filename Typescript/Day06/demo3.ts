//Shallow copy & deep copy

// by default variable is deep copy

let a=10;
let b=a;

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

let a1=[78,90,63,55];
let [...a2]=a1;
console.log(`
    a1 =${a1}
    a2 =${a2}
`)
a2[0]=900;
console.log(`
    a1 =${a1}
    a2 =${a2}
`)