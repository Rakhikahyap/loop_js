var x=8
str=""
c=0
for (let i=0;i<x;i++){
    for (let j=0;j<i;j++){
        str+=c
        c++
    }
    str+="\n"
    console.log(str)
}