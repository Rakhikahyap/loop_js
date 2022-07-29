// let readlineSync = require("readline-sync");
// var number=readlineSync.questionInt("enter a number==");
//   var i=0
//   do{
//   b=(i*number)
//   console.log(i,"*",number,"=",b)
//   i++
// }
// while(i<=10)

const readlineSync= require('readline-sync');
var number=readlineSync.questionInt("enter the number");
var i=0
do{
    a=(i*number)
    console.log(i,"*",number,"=",a)
    i++
}
while(i<=10)


