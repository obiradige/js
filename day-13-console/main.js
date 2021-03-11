
console.log('%c30 Days%c %cOf%c %cJavaScript%c',
'color:green',
'',
'color:red',
'',
'color:yellow')

console.warn('This is warning')
console.error('This is error')

const user = {
    name:"furkan",
    age:26,
    country:"turkey",
    city : "bursa"
}
console.table(user)

const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
  ]
  
  console.time('Regular for loop')
  for (let i = 0; i < countries.length; i++) {
    console.log(countries[i][0], countries[i][1])
  }
  console.timeEnd('Regular for loop')
  
  console.time('for of loop')
  for (const [name, city] of countries) {
    console.log(name, city)
  }
  console.timeEnd('for of loop')

  console.info('30 Days Of JavaScript challenge is trending on Github')

  console.assert(4<2,'2 is not greater than 4')

  const names = ['Asabeneh', 'Brook', 'David', 'John']
  const users2 = [
    {
      name: 'Asabeneh',
      title: 'Programmer',
      country: 'Finland',
      city: 'Helsinki',
      age: 250
    },
    {
      name: 'Eyob',
      title: 'Teacher',
      country: 'Sweden',
      city: 'London',
      age: 25
    },
    {
      name: 'Asab',
      title: 'Instructor',
      country: 'Norway',
      city: 'Oslo',
      age: 22
    },
    {
      name: 'Matias',
      title: 'Developer',
      country: 'Denmark',
      city: 'Copenhagen',
      age: 28
    }
  ]
  console.group('Names')
  console.log(names)
  console.groupEnd()
console.group('Users')
console.log(user)
console.groupEnd()

const func = ()=>{
    console.count("fuction has been called")
}

func()
func()
func()