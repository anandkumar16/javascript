let myArr = [1,2,3,4,5,6];
 //console.log(myArr);
// console.log(myArr[1]);

myArr.push(7);
//console.log(myArr);

myArr.pop();
//console.log(myArr);

//console.log(myArr.includes(1));

myArr.unshift(7);
//console.log(myArr);

myArr.shift();
// console.log(myArr);

// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
 console.log("B ", myArr);


 const myn2 = myArr.splice(1, 3)
 console.log("C ", myArr);
 console.log(myn2);