// const myNum = [1,2,3,4,5,6,7,8,4]
// const sumNum = myNum.reduce(function(accumulator,currentvalue){
//     console.log(`value of acc${accumulator} and current value is ${currentvalue}`);
    
//     return   accumulator +currentvalue
// },0)
// console.log(sumNum);
// const myNum = [1,2,3,]
// const sumNum = myNum.reduce((accumulator,currentvalue) =>
//    // console.log(`value of acc${accumulator} and current value is ${currentvalue}`);
//      accumulator +currentvalue,0)
// console.log(sumNum);



const shopingcart =[ 
{
    itemName:"js course",
    price: 999,
},
{
    itemName : "py course",
    price: 9999
},
{
    itemName:"ds course",
    price: 999
},
{
    itemName:"app dev course",
    price: 9200
},
{
    itemName:"hacking course",
    price: 1000
},
]

const totalbill=shopingcart.reduce((acc,item)=>(acc+item.price),0)
console.log(totalbill);
