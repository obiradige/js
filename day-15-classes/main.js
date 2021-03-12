
class Person{
    constructor(firstName,lastNmae,age,city,luckNumber){
        console.log(this)
        this.firstName = firstName
        this.lastNmae = lastNmae
        this.age = age
        this.city=city
        this.luckNumber = luckNumber
    }
}

const person = new Person("furkan","erdogan",21,"bursa",34)
const person2 = new Person("yusuf","erdogan",22,"bursa",13)
const person3 = new Person("hasan","erdogan",24,"istanbul",42)

class Personn{
    constructor(firstName='Furkan',lastNmae='Erdogan',age=12,city='byrsa',luckNumber='13'){
        console.log(this)
        this.firstName = firstName
        this.lastNmae = lastNmae
        this.age = age
        this.city=city
        this.luckNumber = luckNumber
    }
}
const personn = new Personn()
console.log(personn)

class Human{
    constructor(firstName,lastNmae,age,city,luckNumber){
        console.log(this)
        this.firstName = firstName
        this.lastNmae = lastNmae
        this.age = age
        this.city=city
        this.luckNumber = luckNumber
    }
    getFullName(){
        return this.firstName + ' ' + this.lastNmae
    }
}

const human = new Human('furkan','sas',21,'bitlis',34)
console.log(human.getFullName());
console.log(human.firstName);

class Person3 {
    constructor(firstName, lastName, age, country, city) {
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
      this.country = country
      this.city = city
      this.score = 0
      this.skills = []
    }
    getFullName() {
      const fullName = this.firstName + ' ' + this.lastName
      return fullName
    }
    get getscore() {
      return this.score
    }
    get getSkills() {
      return this.skills
    }
  }
  
  const person4 = new Person3('furkan','erdogan',13,'turkey','bursa')
  console.log(person4.getFullName())
  console.log(person4.getscore)
  console.log(person4.getSkills)


  class Human2 {
    constructor(firstName, lastName, age, country, city) {
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
      this.country = country
      this.city = city
      this.score = 0
      this.skills = []
    }
    getFullName() {
      const fullName = this.firstName + ' ' + this.lastName
      return fullName
    }
    get getScore() {
      return this.score
    }
    get getSkills() {
      return this.skills
    }
    set setScore(score) {
      this.score += score
    }
    set setSkill(skill) {
      this.skills.push(skill)
    }
  }

  const human3 = new Human2('furkan','erdogan',14,'turkey','bursa')
  const human4 = new Human2('yusuf','erdogan',13,'turkey','bursa')

  human3.setScore = 1
  human3.setSkill = 'Javaa'
  human3.setSkill = 'JavaScript'

  human3.setScore = 2
  human3.setSkill = 'html'
  human3.setSkill = 'css'

  console.log(human3.score);
  console.log(human4.score)

  console.log(human3.skills)
  console.log(human4.skills)

  class Personnn {
    constructor(firstName, lastName, age, country, city) {
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
      this.country = country
      this.city = city
      this.score = 0
      this.skills = []
    }
    getFullName() {
      const fullName = this.firstName + ' ' + this.lastName
      return fullName
    }
    get getScore() {
      return this.score
    }
    get getSkills() {
      return this.skills
    }
    set setScore(score) {
      this.score += score
    }
    set setSkill(skill) {
      this.skills.push(skill)
    }
    getPersonInfo() {
      let fullName = this.getFullName()
      let skills =
      this.skills.length > 0 &&
      this.skills.slice(0, this.skills.length - 1).join(', ') +
             ` and ${this.skills[this.skills.length - 1]}`
      let formattedSkills = skills ? `He knows ${skills}` : ''
      let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`
        return info
    }
  }

  const per = new Personnn('ali','veli',24,'finland','helsinki')
  const per2 = new Personnn('ayse','fatma',24,'finland','helsinki')
    
  per.setScore = 1
  per.setSkill = 'java'

  per2.setScore = 2
  per2.setSkill = 'python'
  
  console.log(per.getScore)
  console.log(per2.getScore)

  console.log(per.getSkills)
  console.log(per2.getSkills)

  console.log(per.getPersonInfo())
  console.log(per2.getPersonInfo())

  class Person5 {
    constructor(firstName, lastName, age, country, city) {
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
      this.country = country
      this.city = city
      this.score = 0
      this.skills = []
    }
    getFullName() {
      const fullName = this.firstName + ' ' + this.lastName
      return fullName
    }
    get getScore() {
      return this.score
    }
    get getSkills() {
      return this.skills
    }
    set setScore(score) {
      this.score += score
    }
    set setSkill(skill) {
      this.skills.push(skill)
    }
    getPersonInfo() {
      let fullName = this.getFullName()
      let skills =
        this.skills.length > 0 &&
        this.skills.slice(0, this.skills.length - 1).join(', ') +
          ` and ${this.skills[this.skills.length - 1]}`
  
      let formattedSkills = skills ? `He knows ${skills}` : ''
  
      let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`
      return info
    }
    
    static favoriteSkill(){
        const skills = ['HTML', 'CSS', 'JS', 'React', 'Python', 'Node']
        const index = Math.floor(Math.random() * skills.length)
        return skills[index]
    }
    static showDateTime(){
        let now = new Date()
        let year = now.getFullYear()
        let month = now.getMonth() + 1
        let date = now.getDate()
        let hours = now.getHours()
        let minutes = now.getMinutes()
        if (hours < 10) {
        hours = '0' + hours
        }
        if (minutes < 10) {
        minutes = '0' + minutes
        }

        let dateMonthYear = date + '.' + month + '.' + year
        let time = hours + ':' + minutes
        let fullTime = dateMonthYear + ' ' + time
        return fullTime
    }
  }

  console.log(Person5.favoriteSkill())
  console.log(Person5.showDateTime())


  class Student2 extends Person5 {
    constructor(firstName, lastName, age, country, city, gender) {
      super(firstName, lastName, age, country, city)
      this.gender = gender
    }
  
    saySomething() {
      console.log('I am a child of the person class')
    }
    getPersonInfo() {
      let fullName = this.getFullName()
      let skills =
        this.skills.length > 0 &&
        this.skills.slice(0, this.skills.length - 1).join(', ') +
          ` and ${this.skills[this.skills.length - 1]}`
  
      let formattedSkills = skills ? `He knows ${skills}` : ''
      let pronoun = this.gender == 'Male' ? 'He' : 'She'
  
      let info = `${fullName} is ${this.age}. ${pronoun} lives in ${this.city}, ${this.country}. ${formattedSkills}`
      return info
    }
  }
  
  const st1 = new Student2(
    'Asabeneh',
    'Yetayeh',
    250,
    'Finland',
    'Helsinki',
    'Male'
  )
  const st2 = new Student2('Lidiya', 'Tekle', 28, 'Finland', 'Helsinki', 'Female')
  st1.setScore = 1
  st1.setSkill = 'HTML'
  st1.setSkill = 'CSS'
  st1.setSkill = 'JavaScript'
  
  st2.setScore = 1
  st2.setSkill = 'Planning'
  st2.setSkill = 'Managing'
  st2.setSkill = 'Organizing'
  
  console.log(st1)
  
  console.log(st1.saySomething())
  console.log(st1.getFullName())
  console.log(st1.getPersonInfo())
  
  console.log(st2.saySomething())
  console.log(st2.getFullName())
  console.log(st2.getPersonInfo())