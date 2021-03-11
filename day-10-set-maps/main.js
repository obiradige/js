
const companies = new Set()
console.log(companies)

const languages = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French',
  ]

  const lang = new Set(languages)
  console.log(lang)

  for(const language of lang){
      console.log(language)
  }

  companies.add("Google")
  companies.add("Facebook")
  companies.add("Sinen")
  
  for(const comp of companies){
      console.log(comp)
  }

  console.log(companies.delete('Google'))
  console.log(companies.size)

  companies.clear()
  console.log(companies)

  const counts=[]
  const count ={}

for (const l of lang) {
  const filteredLang = languages.filter((lng) => lng === l)
  console.log(filteredLang) // ["English", "English", "English"]
  counts.push({ lang: l, count: filteredLang.length })
}
console.log(counts)

let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]
let c = [...a, ...b]


//union set a birleşim b
let A = new Set(a)
let B = new Set(b)
let C = new Set(c)

console.log(C);

//intersection set a kesisim b
let d = a.filter((num)=>B.has(num))
let D = new Set(d)
console.log(D)


//MAP


countries3 = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo'],
  ]

  const map = new Map(countries3)
  console.log(map)
  console.log(map.size)
  map.set('Turkey','Ankara')
  console.log(map);

  console.log(map.get('Turkey'))

  console.log(map.has('Norwey'))

  for(const co2 of map){
      console.log(co2)
  }

  for(const [co3,ci3] of map){
      console.log(co3,ci3)
  }