const userEmail = []

if (userEmail) {
  //  console.log("Got user email");
} else {
  //  console.log("Don't have user email");
}

if (userEmail.length == 0) {
 //   console.log("Array is empty");
}

const emptyObj = {}

//   console.log(Object.keys(emptyObj).length);

if (Object.keys(emptyObj).length === 0) {
   // console.log("Object is empty");
}

const iceTeaPrice = 100
//iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")

for (let i = 0; i <= 10; i++) {
   // const element = i;
    if (i == 5) {
  //      console.log("5 is best number");
    }
  //  console.log(i);
    
}

let myArray = ["flash", "batman", "superman"]
console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
}

 //continue
 for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
    console.log(`Value of i is ${index}`);
    
}

//break
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
       break
    }
    console.log(`Value of i is ${index}`);
    
}