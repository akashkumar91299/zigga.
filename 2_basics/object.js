// singletom
// object.create


//object litereal

const jsUser= {
    name:  "Akash",
    age:18,
    "email": "akash@google.com",
    location: "uttar pradesh",
    isLogin: false,
}
// console.log(jsUser["name"]);
// console.log(jsUser.location);
jsUser.email= "mukul@google.com",
//Object.freeze(jsUser)
jsUser.email="nfrkjn@google.com",
//console.log(jsUser);

jsUser.greeting = function(){
    console.log("hello Akash chauhan");   
}
jsUser.greetingTwo=function(){
    console.log(`location of js user ${this.location}`);
    
}
console.log(jsUser.greeting);
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());



