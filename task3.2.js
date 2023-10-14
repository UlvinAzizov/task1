function isCEM(number){
    return number%2 === 0
}
function isTEK(number){
    return number%2 !== 0
}
console.log(isCEM(8));
console.log(isTEK(7));