// map,filter and reduce

// let mynum = [0,1,2,3,4,5,6,7,8,9,10];

// let newNum=mynum.filter( function(Num){
//     return Num;
// })

//console.log(newNum)

//const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//const newNums = myNumers.map( (num) =>   num + 10)

// const newNums = myNumers
//                 .map((num) => num * 10 )
//                 .map( (num) => num + 1)
//                 .filter( (num) => num >= 40)

// console.log(newNums);


const myNums = [1, 2, 3]

const myTotal = myNums.reduce(function (acc, currval) {
    return acc + currval
}, 0)

 //const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

 console.log(myTotal);
