let readlineSync=require("readline-sync")
var number=readlineSync.questionInt("enter a number==")
var div=readlineSync.questionInt("enter a div==");
var i=0
do{
  (i<number)
  if (i%div==0){ 
    console.log(i)
  }
  i++
}
  while (i<number)