//hoisting

// let a=10;
// var c = 56;
// if(2){
//     let a=69;
  //  console.log("Inner :",a);
//}
//console.log("Outer :",a);


function printNum()
{
    const username = "Anand";
    //console.log(username)

    function two(){
        console.log(username);
        let website = "url";
        console.log(website);
    }
    // console.log(website);
    two();
}
printNum();