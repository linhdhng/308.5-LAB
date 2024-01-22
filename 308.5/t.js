console.log(' ======= PART 1: THINKING FUNCTIONALLY =======')
// Take an array of numbers and return the sum.
// Take an array of numbers and return the average.
// Take an array of strings and return the longest string.
// Take an array of strings, and a number and return an array of the strings that are longer than the given number. 
// For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); 
// would return ["hello", "morning"].
// Take a number, n, and print every number between 1 and n without using loops. Use recursion.

function sum(nums) {
    let total = 0;
    for (let i = 0; i < nums.length; i++) {
    total += nums[i]
    }
    return total
}
const nums = [2,4,6]
console.log(nums)
console.log('The sum is ' + sum(nums))


function average(nums) {
    let total = 0;
    for (let i = 0; i < nums.length; i++) {
    total += nums[i]
    }
    const mean = total / nums.length
    return mean
}

console.log('The average is ' + average(nums))


function longestStr(str) {
    let longestString = str[0];
    for (let i = 1; i < str.length; i++) {
    if (str[i].length > longestString.length) {
        longestString = str[i];
    }
  }
  return longestString
}

let str = ['honey', 'milk', 'cinnamon', 'apple spice', 'sugar']
console.log(str)
console.log('The longest string is ' + longestStr(str))


function longestValue() {
    const stringItems = numAndStr.filter(item => typeof item === 'string')
    const stringLength = stringItems.map(stringItem => parseInt(stringItem.length))
    return stringLength
}

let numAndStr = [['happy', 'Sunday', 'in', 'the', 'morning'], 5]
console.log(numAndStr)




console.log(' ======= PART 2: THINKING METHODICALLY=======')
let data = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" }, { id: "48", name: "Barry", occupation: "Runner", age: "25" }, { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" }, { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" }, { id: "7", name: "Bilbo", occupation: "None", age: "111" }]
console.log(data)

// Use Callback functions alongside Array methods to accomplish the following:

console.log('----- Sort the array by age.----')
console.log(data.sort((a,b) => a.age - b.age))


console.log('----- Filter the array to remove entries with an age greater than 50. ----')
function filterAge(data) {
    let newArray = [];
    data.forEach((element) => {
        if (element.age < 50) {
            newArray.push(element);
        }
    });

    return newArray;
}
console.log(filterAge(data))


console.log('----- Map the array to change the “occupation” key to “job” and increment every age by 1.-----')
function change() {
    const mappedArray = data.map(obj => {
        const { occupation, age,...rest } = obj
        return { ...rest, job: occupation, age: parseInt(obj.age) + 1 }
    })
    return mappedArray;
}
console.log(change(data))

console.log('----- Use the reduce method to calculate the sum of the ages. ----')
function sumOfAge(data) {
    const age = data.map((obj) => parseInt(obj.age))
    const sumOfAges = age.reduce((accumulator, currentValue) => accumulator + currentValue,0);
    return sumOfAges;
}
console.log(sumOfAge(data))

console.log('----- Then use the result to calculate the average age. ----')
const averageAge = sumOfAge(data)/data.length
console.log(averageAge)

console.log(' ======= PART 3: THINKING CRITICALLY=======')
// For this section, develop functions that accomplish the following:


// For each of the functions above, if the object does not yet contain an age field, create one and set it to 0.
// Also, add (or modify, as appropriate) an updated_at field that stores a Date object with the current time.
//Thought experiment: since the Date object is an object, what would happen if we modified it in the copy of the object created in the second function using setTime() or another method? 
//How could we circumvent potentially undesired behavior?
console.log(' ----- Take an object and increment its age field-----')
const randomObj = [{ number: '6532', age: '23' }, {number: '3427', age: '34'}, {number: '8421', age: '15'}]
console.log(randomObj.sort((a,b) => a.age - b.age))

console.log(' ----- Take an object, make a copy, and increment the age field of the copy. Return the copy.-----')
const copyOfObject = []
copyOfObject.push(randomObj)
console.log(copyOfObject.sort((a,b) => a.age - b.age))
