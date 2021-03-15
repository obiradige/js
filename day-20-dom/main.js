/*const allTitles = document.getElementsByTagName('h1')
console.log(allTitles)

for(let i = 0;i<allTitles.length;i++){
    console.log(allTitles[i])
}

let first = document.getElementById('first-title')
console.log(first)

let firstT = document.querySelector('#first-title')

const titles = document.querySelectorAll('h1')
titles[3].setAttribute('class','title')
titles[3].setAttribute('id','forth-title')

titles[3].classList.add('title','header-title')

titles[3].textContent = "Selam"

const titles = document.querySelectorAll('h1')
titles.forEach((title, i) => {
  title.style.fontSize = '24px' // all titles will have 24px font size
  if (i % 2 === 0) {
    title.style.color = 'green'
  } else {
    title.style.color = 'red'
  }
})*/

const titles = document.querySelectorAll('h1')
titles.forEach((title,i)=>{
    title.style.fontSize ='24px'
    if(i%2==0){
        title.style.backgroundColor = 'green'
    }else{
        title.style.backgroundColor='red'
    }
})