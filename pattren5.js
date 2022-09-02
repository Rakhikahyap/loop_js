// i=1
// while i<=5:
//     a=1
//     while a<=5-i:
//         print(" ",end='')
//         a=a+1
//     b=i
//     while b>=1:
//         print('*',end='')
//         b=b-1
//     print()
//     i=i+1



var i=1
var str=""
while (i<=5){
   var a=0;
    while (a<5-i){
        str+=" ";
    //    console.log()
        a++;
    }
    b=0
    while(b<i){
        str="*"
        b++;
    }
    str+="\n";
    // console.log("")
    i++;
}
console.log(str)
    
// let n = 5;
// let string = "";
// for (let i = 1; i <= n; i++) {
//   // printing spaces
//   for (let j = 0; j < n - i; j++) {
//     string += " ";
//   }
//   // printing star
//   for (let k = 0; k < i; k++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);