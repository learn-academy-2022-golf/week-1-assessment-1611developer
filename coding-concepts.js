// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer: 5
// b) Verify and explain:
        // My answer is correct. The method .push() adds a value to the end of an array. In this case, the code should push "indigo" to the end of the array and output the length of the array. In this case, the output should be 5.




// --------------------1) What will this log?

const cohort = "LEARN 2022"
// console.log(cohort.length)

// a) Your answer: 10
// b) Verify and explain:
    // My answer is correct. When the .length property is used with a string, the ouput should be the number of characters in that string, including spaces. The output should come out to 10.




// --------------------2) What will this log?

const greeting = "Hello World!"
// console.log(greeting[4])

// a) Your answer: o
// b) Verify and explain:
    // My answer is correct. Here the bracket notation with the index reference of 4 will return the value in the fourth position of the string "Hello World!". In this case, since indexes start at the zeroith position, the output should be the letter "o". 




// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])

// a) Your answer: Ruby
// b) Verify and explain:
    // My answer is correct. Instead of hard coding the index location number into the console log like the previous example, here we stored an index number into the constant variable named index. The answer or output should still function the same. The index in bracket notation is referencing the variable index with a value of 1. Therefore, when the code executes, the interpreter will look for the element in the array list with the index or location of 1. In this case, it will output Ruby.



// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
//console.log(weekendDays.toUpperCase())

// a) Your answer: Error
// b) Verify and explain:
    // My answer is correct. The method .toUpperCase() capitalizes all the letters in a given string. In this case, since .toUpperCase() is a string method and not an array method, we should get an error. The error tells us that weekends.toUpperCase is not a function. In order get the desired result of capitalizing strings in an array, we could create a for loop. Below we tell the computer to upcase each index of the array.

    for (let i = 0; i < weekendDays.length; i++) {
        console.log(weekendDays[i].toUpperCase())
      }

    // output: SATURDAY
    //         SUNDAY






// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
//console.log(typeof dataTypes.length)

// a) Your answer: string
//                 string
//                 string
//                 string

// .length will ask the computer to go through all the elements of the array. The typeof operator will note what data type each element in the array is.

// b) Verify and explain:

// I was wrong here. It seems that the .length property gave an output of 4 and then by asking the computer to give us a typeof it took the output of 4 and returned the data type of 4 which is a number. I was giving too much power to the .length property. In order to achieve the result I was expecting, I would actually have to do a for loop like below. It is definitely necessary to take breaks. I've been staring at the screen too long that I'm loosing focus. Anyways, the errors in the terminal are really helpful in figuring out what went wrong. I am learning a lot by making mistakes.

for (let i = 0; i < dataTypes.length; i++) {
    console.log(typeof dataTypes[i])
  }

// output: string
//         string
//         string
//         string