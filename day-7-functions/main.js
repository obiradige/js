

function square (){
    let num = 2;
    let seq = num*num
    console.log(seq)
}
square()

function fullName2(){
    let firstName = "Akın "
    let middleName = "Furkan "
    let surmame = "Erdogan"
    let fullName = firstName+middleName+surmame
    return fullName
}

console.log(fullName2())

function alanHesapla(r){
    let area = Math.PI*r*r
    return area
}   
console.log(alanHesapla(3))

function sum(a,b){
    return console.log(a+b)
}
sum(5,7)

function sumArrayValues(arr){
    let sum = 0
    for(let i = 0;i<arr.length;i++){
        sum = sum + arr[i]

    }
    return sum
}

const numberss= [1,2,3,4,5,6,7]
console.log(sumArrayValues(numberss))

function sumAllNumbs(...args){
    let sum = 0
    for(let ar of args){
        sum = sum + ar
    }
    return sum
}

console.log(sumAllNumbs(1,2,3,4,5))

console.log(sumAllNumbs(10,20,30,40,50))

const changeToUpperCase = arr =>{
    const newArr= []
    for (const element of arr){
        newArr.push(element.toUpperCase())
    }
    return newArr
}
const ulkeler = ["turkiye","almanya","fransa","danimarka"]
console.log(changeToUpperCase(ulkeler))

const greetings = (name = "furkan") =>{
    let message = name + "welcome"
    return message
}
console.log(greetings())
console.log(greetings("fatih"))