function showSidebar(){
    const sidebar = document.querySelector(`.sidebar`)
    sidebar.style.display = `flex`
}
function hideSidebar() {
    const sidebar = document.querySelector(`.sidebar`)
    sidebar.style.display = `none`
}


//1masala
function musbat(array) {
    return  array.filter((son) => son > 0)
}
// console.log(musbat([-5,3,-2,7,-9]));//3,7
// console.log(musbat([5,-3,2,-7,-9]));//5,2

//2masala
function tenth(son) {
    return Math.floor (son / 10 ) % 10
}
// console.log(tenth(123));//2
// console.log(tenth(4567));//6

//3masala
function binary(num) {
    if (num === 0) {
        return `false`
    }if (num === 1) {
        return `true`
    } else {
        return null
    }
}
// console.log(binary(0));//false
// console.log(binary(1));//ture
// console.log(binary(4));//null

//4masala
function card(num , bool) {
    if (bool === false) {
        num = num.slice(0, 4) + ` **** **** **` 
        return num
    }else{
        return num
    }
}
// console.log(card("8600 1234  5615 2589",true));//8600 1234  5615 2589
// console.log(card("8600 1234  8743 2589",false));//8600 ****  ****  **89

//5masala
function checkpassword(password) {
    qilomadm

}
// console.log(checkpassword("1234456789"));//false
// console.log(checkpassword("123hello"));//true

//6masala
function camelCase(str) {
    return str.replace(/[-](.)/g, (match, char) => char.toUpperCase());
}
// console.log( camelCase("kabab-case"));//kababCase
// console.log( camelCase("lorem-ipsum-dollor"));//loremIpsumDollor

//7masala
function bigAndSmall(str) {
}
console.log(bigAndSmall("1 2 3 4 5"));//5 1
console.log(bigAndSmall("4 64 75 2"));//75 2

