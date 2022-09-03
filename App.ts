// let A:string="Hey this is Typescript"
// console.log(A);
export {};
// class App{
//     Test(){
//         console.log("We are inside the Class")
//     }
// }
// let X1=new App();
// X1.Test();

//Data types in Typescript

//let A:string="Hey Heyi"
// let A:number=10.10
// console.warn(A)

//Array in Typescript

// let A:string[]=["saloni","alen","rick","stefan"]
// A.push("klaus","Damon")
// A[6]="riveka"
// console.warn(A)

//Objects in Typescript

// interface usertyped{//interface tell us that anything you define in those curlybaces we follow the role.
//     name:any,
//     age:number,
//     role:string
// }
// let user:any={//any is used to tell that we can now use any datatype
//     name:"alen",
//     age:21,
//     role:"associate"
// }
// user.name=900
// user.role=300
// console.log(user)

//Union in Typescript

// let data: string | number | boolean = "Stefan"; //this is how we can define the more than one datatpes for one variable
// data = 700;
// //console.log(data);

// //Interface in Typescript

// interface usertyped{

//     name:string,
//     age:number,
//     role:string,
//     getname:()=>string
// }
// let user:any={//any is used to tell that we can now use any datatype
//         name:"Saloni",
//         age:21,
//         role:"associate",
//         getname:function(){
//             return "This is Your Home"
//         }
//     }
// console.log(user.getname())

//function in typescript

// function Sum(a:number,b?:number):number{
//     return b?a*b:a;
// }
// console.log(Sum(800,78));


//Class in Typescript

// class App{
//     name:"Damon"
//     getname(){
//         console.log(this.name);
//     }
// }
// let Ap=new App()
// Ap.getname()


//Inheritance in Typescript

// class Parent{
//     name="Rick janothon"
//     getname(){
//         console.log("This is About inheritance");
//     }
// }
// class Child extends Parent{
//     setname (){
//         console.log(this.name);
//     }
// }
// let c1=new Child();
// c1.getname();
// c1.setname();
  


//Module in Typescript

// import slogin from './Student'
// import tlogin from './Teacher'
// let teacher=new tlogin();
// console.warn(teacher.data);
// let Student=new slogin();
// console.warn(Student.data);


//Generics in Typescript

// function user<T>(data:T):T{
//     return data;
// }
// console.log(user({name:"saloni",age:21}).age)



//Enum in Typescript


// enum Days{
//     mon=1,tues,wed,thur,fri,sat,sun
// }
// let whichDay:Days
// whichDay=Days.sun
// console.log(whichDay==7)


///Symbols In Typescript

let DemoF1=Symbol();
// let s2=Symbol();
// console.log(s1)
// let data={
//     [s1]:"Some Data"
// }
// console.log(data[s1])

// class Demo{
//     [DemoF1](){
//         return "Some query"
//     }
// }
// let t1=new Demo();
//console.log(t1[DemoF1]())

