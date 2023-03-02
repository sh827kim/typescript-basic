import {getFullName, Human} from './human'

const specialHuman: Human = {
    firstName: 'Hue',
    lastName: 'Go',
    age: 43,
    isValid: true
}

const fullName = getFullName(specialHuman)

console.log(fullName)
console.log(specialHuman.isValid)