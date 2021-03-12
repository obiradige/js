
localStorage.setItem('age',20)
console.log(localStorage)

const skills = ['HTML', 'CSS', 'JS', 'React']
const skillsJson = JSON.stringify(skills,undefined,4)
localStorage.setItem('skills',skillsJson)
console.log(localStorage)

const user = {
    firstName: 'Asabeneh',
    age: 250,
    skills: ['HTML', 'CSS', 'JS', 'React']
  }
  
  const userText = JSON.stringify(user,undefined,4)
  console.log(userText)

  let firstName = localStorage.getItem('firstname')
  let age = localStorage.getItem('age')
  let skills2 = localStorage.getItem('skills')

  console.log(firstName,age,skills2)