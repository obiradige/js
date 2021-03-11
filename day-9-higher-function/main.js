//callback

const callback = n =>{
    return n**2
}
function cube(callback,n){
    return callback(n)*n
}
console.log(cube(callback,3))

//returning function

const higherOrder = n =>{
    const doSomething = m =>{
        const doWhatEver = t =>{
            return 2 * n + 3 * m + t 
        }
        return doWhatEver
    }
    return doSomething
}

console.log(higherOrder(2)(3)(10))

const numbers = [1,2,3,4,5]
const sumArray = arr =>{
    let sum = 0 
    const callback2 = function(element){
        sum += element
    }
    numbers.forEach(callback)
    return sum
}

console.log(sumArray(numbers))

//setting time
//setinterval

function sayHello(){
    console.log("hi")
}

// setInterval(sayHello,2000) her 2 saniyede bir hi yazar
//setTimeout

setTimeout(sayHello,2000)

//forEach
let sum = 0
const numbers2 = [1,2,3,4,5,6,7]
numbers2.forEach(num=>sum += num)
console.log(sum)

const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
countries.forEach(coun =>console.log(coun.toUpperCase()))

//map
const numberSquare = numbers2.map(num=>(num*num))
console.log(numberSquare)

//filter 

const scores = [
    { name: 'Asabeneh', score: 95 },
    { name: 'Mathias', score: 80 },
    { name: 'Elias', score: 50 },
    { name: 'Martha', score: 85 },
    { name: 'John', score: 100 },
  ]

  const scoreGreat = scores.filter((score)=>score.score>80)
  console.log(scoreGreat)

  //reduce 
  const sum2 = numbers2.reduce((acc,cur)=>acc+cur,0)
  console.log(sum2)

  //every
  const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
  const areAllStr = names.every((names)=>typeof name === 'string')
  console.log(areAllStr)

//find

const ages = [24, 22, 25, 32, 35, 18]
const age  = ages.find((age)=>age<20)
console.log(age)

//findIndex
const names2 = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const ages2 = [24, 22, 25, 32, 35, 18]

const result = names.findIndex((name)=>name.length>7)
console.log(result)