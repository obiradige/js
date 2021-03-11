
const arr = Array()
const arr2 = []
const number = [1,2,3,4,5,6,7,8]
const fruit = ["apple","banana","orange","watermelon","strawberry"]
const diff = [2,4,"fiat","ferrari",3.15]
console.log(arr,' ',arr2,' ',number,' ',fruit,' ',diff)


let exam = "JavaScript"
let charSet = exam.split('')
console.log(charSet)

console.log(number[3])

number[0] = 10
number[1] = 20
console.log(number)

//array constructer
const arr3 = Array()
console.log(arr3)
const eightEmpty = Array(8)
console.log(eightEmpty)

//fill
const nineEmpty = Array(8).fill("x")
console.log(nineEmpty)

//concat

const thirdlist = fruit.concat(diff)
console.log(thirdlist)

//indexOf
console.log(number.indexOf(5))

let index=fruit.indexOf("avacado")
if(index != -1 ){
    console.log("ok")
}else{
    console.log("no")
}

//includes

console.log(number.includes(5))
console.log(number.includes(-1))

//join

let names = ["ali","veli","hasan","furkan"]
console.log(names.join(''))
console.log(names.join("# "))
//slice

console.log(number.slice(1,5))

//splice

console.log(number.splice(4,7))
console.log(number)

//push

console.log(number.push(80))
console.log(number.push(100))
console.log(number)

//shift -removing

console.log(number.shift)

//reverse

const revNumber = number.reverse()
console.log(revNumber)

//sort

console.log(number.sort())

//arrayofarray

const arrayOfArray =  [[1, 2, 3], [1, 2, 3]]
console.log(arrayOfArray[1][2])

//exercise

const newArr = ["akın","furkan","erdogan","muhammed","yusuf","erdogan"]
console.log(newArr[3])
console.log(newArr)

let varMi= newArr.indexOf("akın")
let varMi2 = newArr.indexOf("nurullah")
console.log(varMi,' ', varMi2)
console.log(newArr.sort())
console.log(newArr.reverse())
console.log(newArr.slice(2,4))
console.log(newArr.shift())

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
const sorted = ages.sort()
console.log(sorted)
