import { appendFileSync } from 'fs'
import {v4 as uuidv4} from 'uuid'
import validator from 'validator'

// Juzhel Aidyl T. Nipas
// CMSC 100 - U3L
// February 18, 2026
// Exercise 4


function generateUniqueID(fname, lname) {
    let unID = "" // the generated unique id will be placed here

    for (let i = 0; i < 1; i++) { // first letter of first name
        unID += fname.toLowerCase()[i] // add it to unique id
    }

    for (let i = 0; i < lname.length; i++) { // last name
        unID += lname.toLowerCase()[i] // add it to unique id
    }

    for (let i = 0; i < 8; i++) { // unique alphanumeric string
        unID += uuidv4()[i] // add it to unique id
    }

    return unID // return the generated unique ID
}

function addAccount(acc) {
    
    let account = "" // account placeholder

    if (acc[0] != null && typeof(acc[0]) == "string" && acc[0].trim() !== "") { // if first name is present and a string
        account += acc[0] // add first name to the placeholder
        account += ","
    } else {
        return false
    }

    if (acc[1] != null && typeof(acc[1]) == "string" && acc[1].trim() !== "") { // if last name is present and a string
        account += acc[1] // add last name to the placeholder
        account += ","
    } else {
        return false
    }
    
    if (acc[2] != null && typeof(acc[2]) == "string" && (validator.isEmail(acc[2])) && acc[2].trim() !== "") { // if email is present and a string
        account += acc[2] // add email to the placeholder
        account += ","        
    } else {
        return false
    }

    if (typeof(acc[3]) === "number" && acc[3] >= 18) { // if age is present and at least 18
        account += acc[3] // add age to the placeholder
        account += ","
    } else {
        return false
    }

    const uniqueID = generateUniqueID(acc[0], acc[1]) // add the unique ID to the placeholder
    account += uniqueID

    account += "\n" // for proper file formatting

    try {
        appendFileSync('users.txt', account) // write data to file
        return true
    } catch (error) {
        return false // if file writing fails
    }
}

export { generateUniqueID, addAccount }