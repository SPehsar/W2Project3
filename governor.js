// ****** The Governor Class ******
class Governor {
    constructor() {
    }
    // There is only one Governor in the state, therefore
    // these are the Governor properties, and since there is one then all are static
    static isAlive = true
    static firstName = "John"
    static lastName = "Smith"
    static hasHeart = true 
    static hasBrain = true 
    static gender = "male"
    static age = 59


    // There is only one Governor in the state, therfore
    // these are the Governor class methods, and since there is one then all are static
    static isElected() {
        console.log('The Governor has been elected by the majority of votes.')
    }

    static isSmart() {
        console.log('It is left to be seen that the Governor is smart or not.')
    }
}

// Logging the properties and test the methods (without instantiate)

// Raw approach to list the Governor's properties
console.log("\n*** Governor's properties Output without sentence type format:", "\n")
console.log("\n isAlive = " + Governor.isAlive +
    "\n firstName: " + Governor.firstName +
    "\n lastName: " + Governor.lastName +
    "\n hasHeart: " + Governor.hasHeart +
    "\n hasBrain: " + Governor.hasBrain +
    "\n gender: " + Governor.gender +
    "\n age: " + Governor.age )

    console.log("\n*** Governor's properties and methods Output with sentence type format:", "\n")

// This area is for logging the Governor's static properties with format.
console.log("Is the Governor alive? " + Governor.isAlive)
console.log("Our state Governor's name is " + Governor.firstName + " " + Governor.lastName + ".")
console.log("Does the Governor have heart? " + Governor.hasHeart)
console.log("Does the Governor have brain? " + Governor.hasBrain)
console.log("The Governor's gender is " + Governor.gender + ".")
console.log("The Governor is  " + Governor.age + " years old.")


// This area is for invoking  class static methods
Governor.isElected()
Governor.isSmart() 
