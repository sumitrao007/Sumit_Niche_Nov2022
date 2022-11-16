//Json Object
//Java script object Notation
// key & value format data issaved

let jsonobj={
    id:9,
    'fname':'Sumit',
    lname:"Raokhande"
}
//1 Using dot operator
//2 Using square operator

//1 Using dot operator
// console.log(`
//     First Name  :: ${jsonobj.fname}
//     Last Name   :: ${jsonobj.lname}
//     Id          :: ${jsonobj.id}
// `)

//2 Using square operator

// console.log(`
// ------------------------------
//     First Name  :: ${jsonobj["fname"]}
//     Last Name   :: ${jsonobj["lname"]}
//     Id          :: ${jsonobj["id"]}
// `)
jsonobj.id=8;
jsonobj["fname"]="Spruha";

// console.log(`
// ------------------------------
//     First Name  :: ${jsonobj["fname"]}
//     Last Name   :: ${jsonobj["lname"]}
//     Id          :: ${jsonobj["id"]}
// `)


//Array of Object
let arrobj=[
    {
        id:9,
        'fname':'Sumit',
        lname:"Raokhande",
        country:{
            cid:1,
            cname:'India'
        },
        month:["Jan","March","Dec"],
        result:[
            {
                subj:"M1",
                marks:40
            },
            {
                subj:"M2",
                marks:45
            },
            {
                subj:"M3",
                marks:58
            }
        ]
    },
    {
        id:3,
        'fname':'Spruha',
        lname:"Raokhande",
        country:{
            cid:4,
            cname:'Us'
        },
        month:["Feb","April","July"],
        result:[
            {
                subj:"M1",
                marks:48
            },
            {
                subj:"M2",
                marks:55
            },
            {
                subj:"M3",
                marks:68
            }
        ]
    },
    {
        id:6,
        'fname':'Kiran',
        lname:"Raokhande",
        country:{
            cid:8,
            cname:'Japan'
        },
        month:["May","Aug","Sept"],
        result:[
            {
                subj:"M1",
                marks:42
            },
            {
                subj:"M2",
                marks:59
            },
            {
                subj:"M3",
                marks:85
            }
        ]
    }

];


for(let i=0;i<arrobj.length;i++){
    console.log(`
        First Name  :: ${arrobj[i].fname}
        Last Name   :: ${arrobj[i].lname}
        Id          :: ${arrobj[i].id}
        Country Name:: ${arrobj[i].country.cname}
        Month       :: ${arrobj[i].month.join("  ")}
        ----------------Result----------------
    `)
    
    arrobj[i].result.forEach((item)=>{
        console.log(`
            Subject :: ${item.subj}
            Marks   :: ${item.marks}
        `)
    })
    

}

