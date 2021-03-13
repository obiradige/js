function outherFunction(){
    let count = 0
    function plusOne(){
        count++
        return count
    }
    function minusOne(){
        count--
        return count
    }
    return{
        plusOne:plusOne(),
        minusOne:minusOne(),
    }

}
const innerFunc = outherFunction()
console.log(innerFunc.plusOne);
console.log(innerFunc.minusOne);