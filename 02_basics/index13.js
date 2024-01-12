//for of //for each

// let myArr=[0,1,2,3,4,5];

// let myArr1=["a","b","c"];

// let myArr2=[{1:2},{3:4}]


// myArr.forEach(element => {
//     console.log(element)
// });


// for (const i of myArr) {
//     console.log(i);
// }

// for (const i of myArr2) {
//     console.log(i);
// }





// const greetings = "Hello world!"
// for (const greet of greetings) {
//     if(greet==" "){
//         continue
//   }
// console.log(greet)
//}

// const myUser ={
//     ind : "delhi",
//     us : "washington"
// }

// for (const key in myUser) {
//   console.log(myUser[key]);
// }

// const myObject = {
//     js: 'javascript',
//     cpp: 'C++',
//     rb: "ruby",
//     swift: "swift by apple"
// }

// for (const key in myObject) {
//     console.log(myObject[key]);
// }

let myArr=["aaa","bbb","ccc"];

//for each
// myArr.forEach( function(item){
//     console.log(item);
// })

// myArr.forEach( (item) => {
//     console.log(item);
// })

// myArr.forEach( function(item,index,arr){
//     console.log(item,index,arr)
// })

// const myCoding = [
//     {
//         languageName: "javascript",
//         languageFileName: "js"
//     },
//     {
//         languageName: "java",
//         languageFileName: "java"
//     },
//     {
//         languageName: "python",
//         languageFileName: "py"
//     },
// ]

// myCoding.forEach( (item) => {
    
//     console.log(item.languageName);
// } )

 const coding = ["js", "ruby", "java", "python", "cpp"]

// foreach doesnot return anything
// take 3 parameter
//need a callback func

const values = coding.forEach( (item) => {
    console.log(item);
   // return item
} )

console.log(values);


// let myCode = ["python","css","js","cpp"];

// const values = myCode.forEach( (item) => item)

// console.log(values)