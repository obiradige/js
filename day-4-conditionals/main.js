
let num = 3
if(num>0){
    console.log("yes agaaa")
}

let num2 = 4

if(num2=0){
    console.log("esit")
}else if(num2>0){ 
    console.log("buyuk")
}else{
    console.log("kucuk")
}

let day = 3

switch(day){
    case 1:
        console.log("today monday")
        break
    case 2: 
        console.log("today tuesday")
        break
    case 3:
        console.log("today wednesday")
        break
    case 4:
        console.log("today thursday")
        break
    case 5:
        console.log("today friday")
        break
    case 6:
        console.log("today saturday")
        break
    case 7:
        console.log("today sunday")
        break
    default:
        console.log("wrong input")
}
/*
let age = prompt("please give me your age")
if(age>=18){
    console.log("you can go")
}else{
    console.log("no little bitch")
}


let a = 4
let b = 3

 a > b ? console.log("a greater than b")  : console.log("b greater than a")

 let number = prompt("give me ")
 if(number % 2 == 0){
     console.log("ok")
 }else{
     console.log("looser")
    }
    ,*/

let score = prompt("what is your score")
if(score <= 100 && score>=80){
    console.log("A")
}else if(score <= 80 && score >= 60){
    console.log("B")
}else if( score <= 60 && score>=40 ){
    console.log("C")
}else{
    console.log("D")
}