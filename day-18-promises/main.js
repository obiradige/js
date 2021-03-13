
const doSomething = callback=>{
    setTimeout(()=>{
        const skills = ['hava','su','toprak','ates']
        callback('it did not well',skills)
    },2000)
}

const callback = (err,result)=>{
    if(err){
        return console.log(err)
    }
    return console.log(result)
}

doSomething(callback)


// Promise
const doPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const skills = ['HTML', 'CSS', 'JS']
      if (skills.length > 0) {
        resolve(skills)
      } else {
        reject('Something wrong has happened')
      }
    }, 2000)
  })
  doPromise
    .then((result)=>{
        console.log(result);
    })
    .catch(err => console.log(err))

    //fetch Api

    const url = 'https://restcountries.eu/rest/v2/all'
    fetch(url)
    .then(response=>response.json())
    .then(data =>{
        console.log(data);
    })
    .catch(err=>console.log(err))


    //async await
    const fetchData = async ()=>{
        try{
            const response = await fetch(url)
            const countries = await response.json()
            console.log(countries[9])
        }catch(err){
            console.log(err);
        }
    }

    console.log("===========");
    fetchData()