

// const userName = "Priya Piyush Vijayvargiya";
// const stringLength = userName.length

// for(let i = 0; i < stringLength; i++){
//     console.log(userName[i])
// }

// program to write Table till 10 
// for(let i = 1; i <= 10; i++ ){
//     for(let j = 1; j <= 12; j++){
//         console.log(`${i} * ${j} = ${i * j}`)
//     }
//     console.log("----------------")
// }

/** Star pattern */
const symbol = " * "

for(let i = 1; i<= 5; i++){
    console.log(symbol.repeat(i))
}

for(let i = 6; i>= 1; i--){
    console.log(symbol.repeat(i))
}


/** Program that reads string and count number of characters present in the string */

const userName = "Priya Piyush vijayvargiya";
let count = 0;
for(let i = 0; i < userName.length; i++){
    count++;
    console.log(` Number of character in the string is ${count}`)
}

/* Given a range of number from 1 to 101 find all the even number */
let remainder;
for(let i = 1; i<=101; i++){
    remainder = i % 2
    if(remainder === 0){
        console.log(`${i} is an even number`)
    } else{
        console.log(`${i} is an odd number`)
    }
}

/**  A program that reads 3 string and print the smallest string */
// const inputStr = " Priya vijayvargiya";
// for(let i = 0; i<inputStr.length; i++){
//     console.log(`${i}`)
// }

/** A program that reads the string and counts numbers of vowels in a string */

const inputString = " Priya vijayvargiya";
const vowels = 'aeiou';

for(let i= 0;i<inputString.length;i++){
    if(vowels.includes(inputString[i])){
        console.log(`${inputString[i]} is a vowel`)
    }else{
        console.log(`${inputString[i]} is not a vowel`)
    }
}

