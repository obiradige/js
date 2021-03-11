//accessing character
let string = "JavaScript"
let firstLetter = string[0]
console.log(firstLetter)
let second = string[1]
console.log(second)

//charAt() 

let string2 = "30 days of javascript"
console.log(string.charAt(0))

//charCodeAt()
console.log(string.charCodeAt(3)) // ascii karakter

//concat
console.log(string.concat("furkan","erdogan")) // birleştirme

//endWith
let enddWi = "furkanerdogan"
console.log(enddWi.endsWith("an")) //true & false

//includes
let country = "turkey"

console.log(country.includes("ur"))

//index_of

let def = "today is tuesday"
console.log(def.indexOf("is"))

//match

let string3 = 'love' 
let pattern = '/love'
let pattern2 = '/love/gi'

//string3.match(substring)
//let string3 = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(string3.match('love'))
//repeat
console.log(string3.repeat(5))
//replace
let random = "java android"
console.log(random.replace('java','ios'))
//search
let arama = "Akın Furkan Erdogan Yusuf Erdogan"
console.log(arama.search("erdogan"))

//split
console.log(arama.split(' '))

//substr
console.log(arama.substr(12,16))

//to_lowercase
console.log(arama.toLowerCase())
//to_uppercase
console.log(arama.toUpperCase())