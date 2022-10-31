// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Describing your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Describe your process:

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "cherry"




// -----------------------------------------------------------------------------------

// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Describe your process:

// 1. Create a function using the arrow function syntax.

// 2. Input: The function will take in a parameter of number.

// 3. Output: It will return whether the number passed is below, at, or above the boiling point.

// 4. Declare a variable for the boiling point and assign it a value of 212.

// 5. Within the function, use conditionals and comparison/equality operators to check if the number passed is greater than, equal to, or less than the boiling point.

    // If the user passes in string or anything other than a number, put a final else statement stating that whatever they entered is not a number.

// 6. Use return statements in the function to print whether the number passed is below, at, or above boiling point.
   
    // Use string interpolation in the return statements to output the actual number values of the temp1, temp2, and temp3 variables.

// 7. Invoke the function. Call the function in the console log and pass in a number argument. In this case, I will use the test variables provided. I will also trying passing a string to test the else statement.

// 8. Check and see if each test variable gives the output expected corresponding to the temperature given.


const temp1 = 42
// Expected output: "42 is below boiling point"

const temp2 = 350
// Expected output: "350 is above boiling point"

const temp3 = 212
// Expected output: "212 is at boiling point"

const boilingPoint = 212

const boilingOrNot = (number) => {
    if (number > 212) {
        return `${number} is above boiling point`
    } else if (number === 212) {
        return `${number} is at boiling point`
    } else if (number < 212) {
        return `${number} is below boiling point`
    } else {
        return `${number} is not a number`
    }
}

// console.log(boilingOrNot(temp1)) // "42 is below boiling point"
// console.log(boilingOrNot(temp2)) // "350 is above boiling point"
// console.log(boilingOrNot(temp3)) // "212 is at boiling point"

// Non-number value output test
//console.log(boilingOrNot("cool")) // "cool is not a number"

// -----------------------------------------------------------------------------------



// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Describe your process:

// 1. The first step is to look for a method that can combine both arrays together so that they make one array. The array method .concat() does exactly that.

// 2. Create a new variable that will store our combined arrays.

// 3. Set the new variable equal to the arrays to be combined and combine them with .(concat)

    // Example:    const combinedArrayList = arrayList1.concat(arrayList2)

// 3. Once the arrays are combined, we will then wrap the arrayList1.concat(arrayList2) with parenthesis so we can chain the .length method to it.

    // Example:     const combinedArrayList = (arrayList1.concat(arrayList2)).length

    // The .length property will now tell us the number of elements in our new array.

// 4. Lastly, we will console log the new variable to get the desired result.

    // Example:     console.log(combinedArrayList)


const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9

const concatRuns = (padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns)).length
//console.log(concatRuns)         // output: 9

// -----------------------------------------------------------------------------------





// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Describe your process:

// 1. The first step is to create a new variable and set it equal to the original variable so that we can manipulate the array.

// 2. Now that we have the value of array to play with, we can use some array methods to alter the array.

// 3. Find an array method that will reverse values in an array.

    // The .reverse() method will do just that. However, we have a string here as the value of the variable.

// 4. Find an method that will convert the string "Golf 2022" into an array.

    // The .split("") method will do just that. This will split all the characters in the string into elements of an array.

    // The value of our new variable bestCohort is now an array.

// 4. Now that we have an array to work with, we can use .reverse() method to reverse the elements in our array.

// 5. The elements in the array are now reversed, however they are all seperated by single quotes since they are elements of an array.

// 6. Find a method that will convert the array back into a string

    // The .join("") method will do just that.

// Method chaining: We will attach multiple methods to the new array to get desired result.

// 7. Console log the variable to check the result.

const currentCohort = "Golf 2022"
// Expected output: "2202 floG"

const bestCohort = currentCohort.split('').reverse().join("")

//console.log(bestCohort)

// -----------------------------------------------------------------------------------


// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Describe your process:

// 1. Find a method that will go through the array and grab the last of that element we pass in. In this case, there are two 42s, so we want it to pick the last 42 in the array, as well as the last 10 for the other variable.

// 2. Use the .lastIndexOf() method on the array and pass the arguments. In this case, we will pass in the givenValue1 and givenValue2.

// 3. We will do all this witin the console.log.

    // The ouput should show us the last index or location of the number we pass in the array.


const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10]

const givenValue1 = 42
// Expected output: 7

const givenValue2 = 10
// Expected output: 8

//console.log(myNumbers.lastIndexOf(givenValue1)); // 7
//console.log(myNumbers.lastIndexOf(givenValue2)); // 8

// -----------------------------------------------------------------------------------



// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Describe your process:

// 1. Find an array method that sorts. In this case, the method is .sort()

// 2. Since .sort() sorts numbers from smallest to largest, we must find a method that reverses the elements in an array to make it largest to smallest. In this case the method we can use is .reverse()

// 3. Method chaining: We can chain the methods .sort() and .reverse() together on the test variables to get the desired result.

// 4. We can do all this by staying within the console.log.
    // Example:  console.log(myArrayList.sort().reverse())

// 4. This code tells the interpreter to first sort the elements in the array and then reverse the order of that sorted list.


const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
// Expected output: [82, 80, 79, 77, 76, 73, 72]

const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// Expected output: [68, 67, 66, 66, 62, 59, 59]

//console.log(sanDiegoSummerTemperatures.sort().reverse())  // [82, 80, 79, 77, 76, 73, 72]
//console.log(sanDiegoWinterTemperatures.sort().reverse())  // [68, 67, 66, 66, 62, 59, 59]

// -----------------------------------------------------------------------------------