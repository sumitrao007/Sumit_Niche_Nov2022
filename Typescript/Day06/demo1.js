//Splice method
// dynamically data add into the array on particular index 
// let a:number[]=[7,8,9,10,45];
// console.log(a);
// a.splice(2,0,100);
// console.log(a);
// a.splice(5,0,90,63,1);
// console.log(a);
// a.splice(2,1);
// console.log(a);
// a.splice(2,2);
// console.log(a);
// a.splice(3,1,800);
// console.log(a);
// a.splice(4,1,700,600);
// console.log(a);
// a.splice(1,2,1000,900,5000);
// console.log(a);
//slice
//It copy a section of data from array
// let a:string[]=['Core java','Advanced Java','Spring Boot','Angular 12 ','React Js','Embber Js','Vue Js'];
// let temp=a.slice(1,5);
// console.log(a)
// console.log("Copied Array is "+temp);
// let temp2=a.slice(2);
// console.log("Copied Array is "+temp2);
// let temp3=a.slice();
// console.log("Copied Array is "+temp3);
//map
var a = [2, 3, 4, 5, 6];
var sqrArr = a.map(function (myvalue) {
    return (myvalue * myvalue);
});
console.log("Original array " + a);
console.log("Square Array " + sqrArr);
