// console.log(3 <= 5)

// console.log("mango" > "banana")

// console.log("2" > "3")

// console.log(undefined == null)

// console.log(null === undefined)

// console.log(null < 1)
/* ===========================================================================*/

// Conditional Statements

const readline = require("readline-sync");
const number = Number( readline.question("Enter the number"))

if(number % 3 === 0 || number % 5 === 0){
    console.log("Fizz!")
    console.log(`${number} ` )
} else {
    console.log("uff Buzz!")
}