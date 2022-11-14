
// Optional Parameter function

function add1(a:number,b?:number){
    console.log("value of a "+a) //4
    console.log("value of b "+b) // undefined
    console.log("Addition  of a+b "+(a+b!)) //NAN => not a number
}

// add1(4);
// add1(4,5);

function add2(a?:number,b?:number){
    console.log("value of a "+a) //4
    console.log("value of b "+b) // undefined
    console.log("Addition  of a+b "+(a!+b!)) //NAN => not a number
}

// add2();

function add3(a:number,b?:number,c?:number){
    console.log("value of a "+a) //4
    console.log("value of b "+b) // undefined
    console.log("Addition  of a+b "+(a!+b!)) //NAN => not a number
}

//Default Parameter function

function add4(a:number,b:number=5){
    console.log("value of a "+a) //10
    console.log("value of b "+b) // 5
    console.log("Addition  of a+b "+(a!+b!)) //15
}

// add4(10)

function add5(a:number=23,b:number){
    console.log("value of a "+a) //10
    console.log("value of b "+b) // 5
    console.log("Addition  of a+b "+(a!+b!)) //15
}

// add5(10,9);

function add6(a:number=23,b?:number){
    console.log("value of a "+a) //23
    console.log("value of b "+b) // undefined
    console.log("Addition  of a+b "+(a!+b!)) //nan
}
// add6()