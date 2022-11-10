
var a1;
var a2,a3,a4;
var a$r;

// data types
//number(long,short,double,float),string(''/""),boolean(true/false)
//any (number,string,boolean)
//void => it is called neutral data type => it does not point any thing
//misec. null & undefined => it work as data type as well as value 

var b1:number=10;   // Forward declaration & defination
// console.log('value of b1 is '+b1);

var b2!:string;
// console.log("value of b2 is "+b2)

var myany:any;
myany=2.5;
// console.log(`Value of MyAny ${myany} `)
// myany='Sumit';
// console.log(`Value of MyAny ${myany} `)
// myany=true;
// console.log(`Value of MyAny ${myany} `)

// literal
var c1:string|number;
c1='Sumit';
c1=3.14;
// c1=true;

var c2:50|boolean;
// c2=100;
c2=50;
c2=false;

var c3:string|null;
// console.log("Value c3 is "+c3)


// Type assertion

var c4:any;

//1 Angle bracket 
//2 as syntax

//1 Angle bracket 
var temp=(<string> c4);
// temp.

//2 as syntax
var temp2=(c4 as string);
// temp2.


var temp3=45;


// Operators

// Airthmatic => +,-,*,/,%
// conditional & relational => <,>,<=,>=,!=,==(it checks only value ),===(strongly equality => it checks value as well as data type  )
//logical => &&, ||,!
// bitwise => !,&,|,^,~,>>,<<
// ternary => condition?ecpression1:expression2
// assignment=> =,+=,-=,/=,*=
// unary => post/pre => inc/dec ++a,a--

// Control Statement
// if ,if-else,nested if-else,break,continue,switch

    // var count=2;
    // if(count<4){
    //     // console.log("Condition is true")
    // }else  {
    //     // console.log("Condition is false")
    // }

    var choice=2;
    // switch(choice){
    //     case 1: console.log("U r in case 1");
    //             break;
    //     case 2 :console.log("U r in case 2");
    //             break;
    //     default:console.log("U r in default case ");
    //             break;
    // }

    //loop statement
    //while,do-while,for,foreach

var count=5;
    // while(count!=0){
    //     console.log('count is '+count);
    //     count--;
    // }

    do{
        console.log('count is '+count);
        count--;
    }while(count!=0)



