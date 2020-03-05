console.log('Hello!')

let name = 'wyatt'
let todayTemp = 71

console.log(name)
console.log(todayTemp)


function add(a, b) {
    let sum = a + b
    return sum
}

let total = add(3,5)


function isMinnesotaZip(code) {

    if (code >= 55001 && code <= 56763) {
        return true
    }

    return false
}
console.log(isMinnesotaZip(55403)) // true
console.log(isMinnesotaZip(90210)) // false
console.log(isMinnesotaZip('55403')) // true


function GPAcalc(gpa) {

    if (gpa > 4 || gpa < 0) {
        return false
    } else {
        return true
    }

}
console.log(GPAcalc(-3)) // false
console.log(GPAcalc(4.1)) // false
console.log(GPAcalc(2.5)) // true
console.log(GPAcalc(4)) // true


function cityStateAddress(city, state) {
    state = state.toUpperCase()
    address = city + ', ' + state
    return address
}
address = cityStateAddress('Minneapolis', 'mn')
console.log(address)

// use backticks

let lions = 4
let tigers = 7
let tigerPattern = 'striped'
console.log(`There are ${lions} lions. There are ${lions + tigers} big cats in total. All ${tigers} tigers are ${tigerPattern}`)


let orderQuantity = -1

if (orderQuantity < 0) {
    console.log('Error - cannot order a negative number')
}