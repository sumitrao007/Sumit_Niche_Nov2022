// Optional Parameter function
function add1(a, b) {
    console.log("value of a " + a); //4
    console.log("value of b " + b); // undefined
    console.log("Addition  of a+b " + (a + b)); //NAN => not a number
}
// add1(4);
// add1(4,5);
function add2(a, b) {
    console.log("value of a " + a); //4
    console.log("value of b " + b); // undefined
    console.log("Addition  of a+b " + (a + b)); //NAN => not a number
}
// add2();
function add3(a, b, c) {
    console.log("value of a " + a); //4
    console.log("value of b " + b); // undefined
    console.log("Addition  of a+b " + (a + b)); //NAN => not a number
}
//Default Parameter function
function add4(a, b) {
    if (b === void 0) { b = 5; }
    console.log("value of a " + a); //10
    console.log("value of b " + b); // 5
    console.log("Addition  of a+b " + (a + b)); //15
}
// add4(10)
function add5(a, b) {
    if (a === void 0) { a = 23; }
    console.log("value of a " + a); //10
    console.log("value of b " + b); // 5
    console.log("Addition  of a+b " + (a + b)); //15
}
// add5(10,9);
function add6(a, b) {
    if (a === void 0) { a = 23; }
    console.log("value of a " + a); //23
    console.log("value of b " + b); // undefined
    console.log("Addition  of a+b " + (a + b)); //nan
}
add6();
