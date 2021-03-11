
for(let i = 0;i<10;i++){
    console.log(i)
}

const members = ["AKIN","FURKAN","ERDOGAN","YUSUF","ERDOGAN"]
const membersLower = []
for(let i =0;i<members.length;i++){
    membersLower.push(members[i].toLowerCase())
    
}console.log(membersLower)

let number = [1,2,3,4,5,6,7,8]
let total = 0

for (let i = 0; i<number.length;i++){
    total = number[i] + total
}
console.log(total)

let i = 0;
while(i<=5){
    console.log(i)
    i++
}

const numbers = [1, 2, 3, 4, 5]

for(const num of numbers){
    console.log(num*num)
}

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  

  for(const web of webTechs){
        console.log(web.toUpperCase())
  }

  for(let i = 0;i<6;i++){
      if(i==3){
          break
      }
      console.log(i)
  }
  for(let i = 0;i<6;i++){
    if(i==3){
        continue
    }
    console.log(i)
}

//exercise

for(let i=10;i>0;i--){
    console.log(i)
}
for(let i = 1;i<8;i++){
    console.log("#".repeat(i))
}

for(let i = 0;i<10;i++){
    console.log(i , ' ', i ,' = ' ,(i*i))
}

for(let i = 0;i<10;i++){
    console.log(i , ' ', (i*i) ,' ' ,(i*i*i))
}
