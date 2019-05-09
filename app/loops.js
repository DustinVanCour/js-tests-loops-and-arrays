// 1. Within the loopSyntax function, write a while loop that counts every number from 100,000,000 down to 0. Return true after the loop completes.

function loopSyntax() {

    let count = 100000000
    while (count >= 0) {
        //key to while loops is to modify the data that impacts the condition
        count--
    }


    return true
}


// ------------------------------------------


// 2. Write a function that sums up all of the numbers in a range (inclusive)
// Example:
// input: 2, 6
// output: 20

function rangeTotal(n1, n2) {
    let sumTotal = 0
    for (let num = n1; num <= 2; num++) {
        sunTotal += Num
    }
    return sumTotal
}


// ------------------------------------------


// 3. Write a function that will iterate over the properties of the provided object and return a new object with only the key/value pairs of the provided object whose value is truthy.
// Example:
// input: { firstName: "Theo", middleName: "", lastName: "Gerrard" }
// output: { firstName: "Theo", lastName: "Gerrard" }
// Hint: Utilize a for...in loop - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
// Truthy Reference: https://developer.mozilla.org/en-US/docs/Glossary/Truthy

function truthyExtractor(obj) {
    let newObject = {}
    for (let prop in obj) {
        if (obj[prop]) {
            newObject[prop] = obj[prop]
        }
    }
    return newObject
}


// ------------------------------------------


// 4. Given a number, return the corresponding user object from the staff array that has the given number as the value of their id property. If no user is found, return an object with an error property and value of "No user with that id."
// Example:
// input: 17
// output: {id: 17, name: 'St. MaryLou de la Playa Carmen'}
//Example:
// input: 1000
// output: { error: "No user with that id." } 


let staff = [{ id: 1, name: 'Jon' }, { id: 2, name: 'Yuli' }, { id: 21, name: 'Peter' }, { id: 17, name: 'St. MaryLou de la Playa Carmen' }, { id: 51, name: 'Doug' }, { id: 881, name: 'Paul' }, { id: 0, name: 'Jon' }, { id: 999, name: 'Timma' }]

function findById(id) {
    let out = {} //{ error: "No user with that id." }
    for (let i = 0; i < staff.length; i++) {
        let emp = staff[i]
        if (id == emp.id) {
            out = emp
            break
        }
    }
    retun out
}


// ------------------------------------------


// 5. Write a function that accepts a name argument and will loop over theBand members and return the band member's name and the instrument that he/she plays. Use string concatenation or interpolation to return a sentence with the following structure: "[band-members-name] is in the band and plays the [band-members-instrument]".
// Example:
// input: 'Johnny P'
// output: "Johnny P is in the band and plays the sax"

let theBand = {
    homeCity: "Birmingham",
    members: [{
        name: 'Johnny P',
        instrument: 'sax'
    }, {
        name: 'River',
        instrument: 'drums'
    }, {
        name: 'Kris',
        instrument: 'guitar'
    }]
}

function bandMemberDetails(name) {
    let out = ''
    for (let i = 0; i < theBand.members.length; i++) {
        let bandMem = theBand.members[i]
        if (name == bandMem.name) {
            out = bandMem.name = " is in the band and plays the " + bandMem.instrument
            break
        }
    }
    return out
}