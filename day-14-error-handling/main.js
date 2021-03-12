
const throwErroExampleFun = ()=>{
    let message
    let x = prompt('Enter a number ')
    try{
        if(x=='')throw 'empty'
        if(isNaN(x)) throw 'not a numbner'
        x = Number(x)
        if(x<15) throw 'to low'
        if(x>10) throw 'to high'
    }catch(err){
        console.log(err)
    }
}
throwErroExampleFun()