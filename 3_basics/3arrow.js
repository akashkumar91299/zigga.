const user ={
    username : "Akash chauhan",
    price: 200,
    welcomeMessage:function(){
    console.log(`${this.username},welcome to this site`);
    // console.log(this);
    
    }
    
}
// user.welcomeMessage()
// user.username="mukul chauhan"
// user.welcomeMessage()

//console.log(this);

// function one(){
//     let username ="Akash chahuhan"
//     console.log( this.username);  //******** this is not use in function */
    
// }
// one()



//  const one=function(){
//    let  username="Akash chauhan"
//     console.log(this.username);
    
// }
// one()



// const one  = (num1,num2)=>{
//     return num1*num2
     
//  }
//  console.log(one(2,4))

//  **************** IMPLICIT return

//  const one  = (num1,num2)=> (num1*num2)
//  console.log(one(2,4))



 const one  = (num1,num2)=> ({username:"Akash chauhan"})
 console.log(one(2,4))