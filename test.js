// Juzhel Aidyl T. Nipas
// CMSC 100 - U3L
// February 18, 2026
// Exercise 4

import { generateUniqueID, addAccount } from './index.js'


const validAcc = ["Alan", "Turing", "aturing@w3c.com", 58]
console.log(generateUniqueID("Alan", "Turing"))
console.log(addAccount(validAcc))


const invalidAcc = ["Tim", "Kid", "tim@kid.com", 15]
console.log(generateUniqueID("TIM", "KID"))
console.log(addAccount(invalidAcc))