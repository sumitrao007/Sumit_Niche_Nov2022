//functions
// 1 function without parameter & without return type
// 2 function with parameter & without return type
// 3 function without parameter & with return type
// 4 function with parameter & with return type

// 1 function without parameter & without return type

    function add1(){
        console.log("function without parameter & without return type")
    }

    // add1();

    // 2 function with parameter & without return type

    function add2(a:number,b:number){
        console.log("Addition is "+(a+b))
    }

    // add2(4,5)

    // 3 function without parameter & with return type

        function add3():number{
            return (10+9);
        }

    // let temp=add3();
    // console.log("Value of temp "+temp);

    // 4 function with parameter & with return type
 
        function add4(a:number,b:number):number{
            return (a+b);
        }
    
    console.log(`
        Addition is ${add4(8,4)}
    `);
    