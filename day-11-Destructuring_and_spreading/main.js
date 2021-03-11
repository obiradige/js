//Destructing Arrays

const numbers = [1,2,3,4]
let [numOne,numTwo,numThree] = numbers
console.log(numbers,numTwo,numThree)

const names = ['Asabeneh', 'Brook', 'David', 'John']
let [firstPerson,secondPerson,ThirdPerson,FourthPerson] = names
console.log(firstPerson,secondPerson,ThirdPerson,FourthPerson)

const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]

  let [frontEnd,backEnd] = fullStack
  console.log(frontEnd,backEnd)

  const numbers2 = [1, 2, 3]
  let [num1,,num3] = numbers2
  console.log(num1,num3)

  const names2 = [undefined, 'Brook', 'David']

  let [first = 'Furkan',second,third,fourth="yusuf"] = names2
  console.log(first,second,third,fourth)

  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  let [s1,s2,s3,...rest ] = nums
  console.log(s1,s2,s3)
  console.log(rest)

  const countries = [['Finland', 'Helsinki'], ['Sweden', 'Stockholm'], ['Norway', 'Oslo']]

  for(const [country,city] of countries){
      console.log(country,' ',city)
  }

  const fullStack2 = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]

  for(const [front,back] of fullStack2){
      console.log(front,' ',back)
  }

  const rectangle = {
      width : 20,
      heigth : 10,
      area : 200
  }

  let {width,heigth,area,nothing} = rectangle
  console.log(width,' ',heigth,' ',area,' ',nothing) //yukardaki tanımın aynını olmalıdır.

  //rename

  let {width : w,heigth:h,area:a,nothing:n} = rectangle
  console.log(w,h,a,n)


  let {width2,heigth2,area2,nothing2=60} = rectangle
  console.log(width2,' ',heigth2,' ',area2,' ',nothing2)
  
  const person = {

    firstName : "Furkan",
    lastName : "Erdogan",
    age: 24,
    country : "Turkey",
    job : "unemployed",
    skills:[
        'Java',
        'JavaScript',
        'Flutter',
        'NodeJs',
        'Git',
        'Android'
    ],
    languages : ['Turkish','English']
  }

  const getPersonInfo = obj => {
    const skills = obj.skills
    const formattedSkills = skills.slice(0, -1).join(', ')
    const languages = obj.languages
    const formattedLanguages = languages.slice(0, -1).join(', ')
  
    personInfo = `${obj.firstName} ${obj.lastName} lives in ${obj.country}. He is  ${
      obj.age
    } years old. He is an ${obj.job}. He teaches ${formattedSkills} and ${
      skills[skills.length - 1]
    }. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`
  
    return personInfo
  }

  console.log(getPersonInfo(person))

  const todoList = [
    {
      task : "prepare js task",
      time : "4/10/2020 14:30",
      completed : true
    },
    {
      task : "give js test",
      time : "4/11/2020 14:30",
      completed : false
    },
    {
      task : "access js test",
      time : "4/12/2020 14:30",
      completed : true
    }
  ]

  for (const {task, time, completed} of todoList){
    console.log(task, time, completed)
  }
 
  const nums2 = [1,2,3,4,5,6,7,8,9,10]
  let [n1,n2,n3,...arr] = nums2

  console.log(n1,n2,n3)
  console.log(arr)

  const even = [0,2,4,6,8]
  const evenNumbers = [even]
  const odd = [1,3,5,7,9]
  const oddNumbers = [odd]
  const wholeNumbers  = [...even,...odd]
  console.log(evenNumbers)
  console.log(oddNumbers)
  console.log(wholeNumbers)
 

  const user = {
    name:'Asabeneh',
    title:'Programmer',
    country:'Finland',
    city:'Helsinki'
  }

  const copiedUser = {...user}
  console.log(copiedUser)

  const copiedUser2 = {...user,title:"bos"}
  console.log(copiedUser2)

  const sumAllNums = (...args)=>{
    let sum = 0
      for(const top of args){
        sum +=top
      }
      console.log(sum)
  }
  console.log(sumAllNums(1,2,3,4,5,6,7,8))
  
  //exercies
  const constants = [2.72, 3.14, 9.81, 37, 100]

  let [e ,pi ,gravity ,humanBodyTemp ,waterBoilingTemp] = constants
  console.log(e,pi,gravity,humanBodyTemp,waterBoilingTemp)

  const countries4 = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
  let [fin,est,sw,den,nor] = countries4
  console.log(fin,est,sw,den,nor)


  const rectangle3 = {
    width: 20,
    height: 10,
    area: 200,
    perimeter: 60
  }

  let {width:ww,height:hh,area:aa,perimeter:pp}=rectangle3
  console.log(ww,hh,aa,pp)

  const Users = [
    {
      name : 'Furkan',
      score : 75,
      skill:['htm','css','js'],
      age:24
    },
    {
      name : 'yusuf',
      score : 86,
      skill:['htm','css','js'],
      age:22
    },
    {
      name : 'nurullah',
      score : 95,
      skill:['htm','css'],
      age:52
    },
    {
      name : 'zübeyde',
      score : 75,
      skill:['htm'],
      age:43
    },
    {
      name : 'osman',
      score : 65,
      skill:['js'],
      age:27
    },
  ]

  for(const {name,score,skill,age} of Users){
    console.log(name,score,skill,age)
  }


  console.log(skillCount(Users))