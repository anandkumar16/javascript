let dc=["superman","spiderman"];
let marvel=["hulk","thor"];
//console.log(dc);
//marvel.push(dc);
//console.log(marvel);

//  const allHeros = marvel.concat(dc)
//  console.log(allHeros);

//spread operator

// let myHero = [...dc , ...marvel];
// console.log(myHero);


//flat operator
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);