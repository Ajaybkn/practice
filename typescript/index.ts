// function add(a:number,b:number):number{
//     return a+b
// }


// console.log(add(2,3))
//  const multiply=(a:number,b:number):number=>{

//     return a*b

//  }

//  console.log(multiply(2,3))


//  const areaCircle=(base:number,height:number):number=>{
//     return 0.5*base*height
//  }


//  console.log(areaCircle(16,25))


// type Student={
//    name:string,
//    age:number,
//    greet:() => void
// }

// let student:Student ={
//    name:'ajay',
//    age:30,
//    greet():void{
//        console.log("fhiekds")
//    }
// }

// student.greet()
//enums
// enum Role{
//    admin,manager,super_admin
// }

// console.log(Role[2])

//tuples-->>

type info=readonly [string,number,boolean]

const person:info=['ajay',33,true]


console.log(person)