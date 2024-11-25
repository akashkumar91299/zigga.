if(true){
    let a=2
    const b=4
    var c=5
}
// console.log(a);
// console.log(b);
//console.log(c); // here the value of c is not printed but var has no scope therefore the value of c is printed


function one(){
    const username="Akash chauhan"
   // console.log("Hello World !");
    

    function two(){
        const age=20
       // console.log(username);
    }
    //console.log(age); ** give error because of scope
    two()
}

one()

if(true){
    const username ="Akash chauhan"
    if(username==="Akash chauhan"){
        const occupation ="Student"
      //  console.log(`${username} is ${occupation}`);
    }
   //C console.log(occupation);  ** give error
    
}
//console.log(username);  ** give error




//******************** concept************
console.log(addOne(9))  // in this type of declaration  before acess is allowed
function addOne(num){
    return num+1
}
//addOne(5)


//addTwo(5) ** In this type of declaration of function this will give error(not access before)

const addTwo=function(num){
return num+2
}
addTwo()