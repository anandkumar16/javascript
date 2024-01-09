function addNum( num1 ,  num2){
    console.log(num1 + num2);
}

function addNum2(num1 , num2){
    return num1+num2;
}



// addNum(2,3);
// console.log(addNum2(5,6));

function loginUserMessage(username){
    if(!username){
        console.log("PLease enter a username");
    }
    return `${username} just logged in`
}

 //console.log(loginUserMessage())
 //console.log(loginUserMessage("Anand"))

 function price(...num1){
    return num1;
 }

 //console.log(price(122,332,444));

//  const user = {
//     username: "hitesh",
//     prices: 199
// }

// function handleObject(anyobject){
//     console.log(`Username is ${anyobject.username} and price is ${anyobject.prices}`);
// }

// handleObject(user);

const myNewArray = [200, 400, 100, 600]

function SecondValue(getArray){
     return getArray[1]
 }

 console.log(SecondValue(myNewArray));