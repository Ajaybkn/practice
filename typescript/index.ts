// function add(a:number,b:number):number{
//     return a+b
// }


// console.log(add(2,3))
//  const multiply=(a:number,b:number):number=>{

//     return a*b

//  }

//  console.log(multiply(2,3))


//  const areaCircle=(base:number,height:number=40):number=>{
//     return 0.5*base*height
//  }


//  console.log(areaCircle(16))


// const numbers:number[]=[1,2,3,4,5,6,7,8,9,10]

//     // numbers.map((num)=>num*2)

// console.log(
//     numbers.filter((num)=>num%2==0))

type Obj={
    name:string,
    age:number,
    city?:string,
    isMarried:boolean,
}
let obj:Obj={
    name:'John',
    age:30,
    city:'New York',
    isMarried:false,

}
