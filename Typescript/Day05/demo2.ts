//Basics of array
// array is growable & shrinkable dynmically
//array homogenous or hetrogenous

let a:number[]=[4,5,6,8];
let a1=[10,20,30,4];
let a2:number[]=[];
let a3:any[]=[2.5,'Sumit',true];
let a4=[3.14,'Sumit',9,78];

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

function display(a:string,...item:number[]){
    console.log("A is "+a+" "+item.join("  "))
}

// display('Sumit',10,21,33,78,90,100);


//push & pop method
//It is used to add or remove a data from array
// LIFO=> Last in First Out  Principal

let a5:number[]=[];
a5.push(12);
console.log(a5)
a5.push(33,56,77);
console.log(a5)
let res=a5.pop()
console.log(a5)
console.log("Poped value is "+res)
let res1=a5.pop();
console.log(a5)
console.log("Poped value is "+res1)