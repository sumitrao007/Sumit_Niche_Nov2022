//Basics of array
// array is growable & shrinkable dynmically
//array homogenous or hetrogenous
var a = [4, 5, 6, 8];
var a1 = [10, 20, 30, 4];
var a2 = [];
var a3 = [2.5, 'Sumit', true];
var a4 = [3.14, 'Sumit', 9, 78];
// for(let i=0;i<a.length;i++){
//     console.log("Array is "+a[i])
// }
// console.log("Array is "+a);
// console.log("Display Array using join method "+a.join(' # '));
// console.log("Display Array using join method "+a.join());
// foreach method
// a4.forEach((myvalue,i)=>{
//     console.log("My value is "+myvalue+" Index is "+i)
// });
//rest parameter function
function display(a) {
    var item = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        item[_i - 1] = arguments[_i];
    }
    console.log("A is " + a + " " + item.join("  "));
}
// display('Sumit',10,21,33,78,90,100);
//push & pop method
//It is used to add or remove a data from array
// LIFO=> Last in First Out  Principal
var a5 = [];
a5.push(12);
console.log(a5);
a5.push(33, 56, 77);
console.log(a5);
var res = a5.pop();
console.log(a5);
console.log("Poped value is " + res);
var res1 = a5.pop();
console.log(a5);
console.log("Poped value is " + res1);
