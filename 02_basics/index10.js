const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
      // console.log(`${this.username} , welcome to website`);
      //  console.log(this);
    }

}

//user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()


// function chai(){
//         let username = "hitesh"
//         console.log(this.username);
//     }
    
//     chai();


// const chai = () => {
//     let user="abc"
//     console.log(this.user)
// }
//chai();


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

 const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

//  const addTwo = (num1, num2) => ({username: "hitesh"})

console.log(addTwo(5,6))
// console.log(addTwo(3, 4))