
const Person={
    firstName : "Furkan",
    surName : "Erdogan",
    age : 250,
    country : "Turkey",
    city : "Bursa",
    skills :[
        "js",
        "java",
        "nodejs",
        "mongoDb",
        "flutter",
        "python"
    ] ,
    getFullName : function(){
        return this.firstName+' ' + this.surName
    },
    isMarried : true
}

console.log(Person)
console.log(Person.firstName)
console.log(Person.getFullName())
console.log(Person['skills'][2])

Person.nationality = "Circissian"
Person.title = "Engineer"
Person.skills.push('Php')

Person.getInfo = function(){
    let skillWithoutLastSkill = this.skills.splice(0,this.skills.length - 1).join(',')
    let fullName = this.getFullName()
    let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${this.skills}.`
    return statement
}
console.log(Person)
console.log(Person.getInfo())

const person = {
    firstName: 'Asabeneh',
    age: 250,
    country: 'Finland',
    city:'Helsinki',
    skills: ['HTML', 'CSS', 'JS'],
    title: 'teacher',
    address: {
      street: 'Heitamienkatu 16',
      pobox: 2002,
      city: 'Helsinki'
    },
    getPersonInfo: function() {
      return `I am ${this.firstName} and I live in ${this.city}, ${this.country}. I am ${this.age}.`
    }
  }
  const copyPerson = Object.assign({},person)
  console.log(copyPerson)

  const keys = Object.keys(copyPerson)
  console.log(keys)

  const values = Object.values(copyPerson)
  console.log(values)

  const entries = Object.entries(copyPerson)
  console.log(entries)

  console.log(copyPerson.hasOwnProperty('firstName'))
  console.log(copyPerson.hasOwnProperty('score'))