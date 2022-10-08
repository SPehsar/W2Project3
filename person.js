// Superclass or parent class  ========================
class Person {
	constructor(nameParam, ageParam, genderParam) {
         this.name = nameParam      
         this.age = ageParam		|| "Not Provided"
         this.gender = genderParam   	|| "Not Provided"
    }

    sleepToRecharge() {
        console.log("\n" + this.name + ' like all humans need to sleep enough to rechage!\n')
    }

    setDifferentName(newName) {
        this.name = newName
    }

    setMaritualStatusParam(maritualStatusParam) {
        this.maritualStatus = maritualStatusParam
    }

}


// 1st Subclass or child class  ========================
class PostalWorker extends Person {

    constructor (nameParam, ageParam, genderParam, titleParam) {
    super(nameParam, ageParam, genderParam)
	this.title = titleParam                 || "Mail Delivery I"
	this.workingHours = 8
    }

    workingHoursStatement() {
        console.log("\n" + this.name + " works on sorting and delivering mails " + this.workingHours + " hours a day.\n")
    }

    setNewTitle(newTitle) {
        this.title = newTitle
    }

    newTitleIsSet() {
        console.log("\n" + this.name + " has ben given \"" + this.title + "\" title.\n")
    }

}

// 2nd Subclass or child class ========================
class Chef extends Person {

    constructor (nameParam, ageParam, genderParam, workingHoursParam, skillsParam = ["hardworking", "attentive"]) {
    super(nameParam, ageParam, genderParam)
	this.workingHours = workingHoursParam  || 8
        this.skills = skillsParam
    }

    chefExperince() {
        console.log("\nOur " + this.age + " years old chef look to be as experinced as other expert chefs.\n")
    }

    addSkill(skill) {
        this.skills.push(skill)
    }

}
// // ==========  Test Child1 fist instance Block starts ================
console.log("\nHello!\n")
let bill = new PostalWorker("Bill", 40, "male")
console.log(bill)
bill.sleepToRecharge()
bill.setDifferentName("William")
console.log(bill)
bill.setNewTitle("Post Master")
bill.newTitleIsSet()
console.log(bill)
bill.setMaritualStatusParam("married")
console.log(bill)
bill.workingHoursStatement()
// // ==========  Test child1 first instance Block Ends ================


// // ==========  Test Child1 second instance Block starts ================
// console.log("\nHello!\n")
// let Julie = new PostalWorker("Julie", 25, "female")
// console.log(Julie)
// Julie.sleepToRecharge()
// Julie.setDifferentName("Julia")
// console.log(Julie)
// Julie.setNewTitle("Mail Sorter")
// Julie.newTitleIsSet()
// console.log(Julie)
// Julie.setMaritualStatusParam("single")
// console.log(Julie)
// Julie.workingHoursStatement()
// // ==========  Test child1 second instance Block Ends ================




// // ==========  Test Child2 fist instance Block starts ================
// console.log("\nHello!\n")
// let john = new Chef("John", 50, "male")
// console.log(john)
// john.sleepToRecharge()
// john.setDifferentName("Johnathan")
// console.log(john)
// john.chefExperince()
// john.setMaritualStatusParam("divorced")
// console.log(john)
// john.addSkill("fast")
// console.log(john)
// // ==========  Test child2 first instance Block Ends ================


// // ==========  Test Child2 second instance Block starts ================
// console.log("\nHello!\n")
// let liz = new Chef("Liz", 35, "female")
// console.log(liz)
// liz.sleepToRecharge()
// liz.setDifferentName("Elizabeth")
// console.log(liz)
// liz.chefExperince()
// liz.setMaritualStatusParam("married")
// console.log(liz)
// liz.addSkill("resourceful")
// console.log(liz)
// // ==========  Test child2 second instance Block Ends ================