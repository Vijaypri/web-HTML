//A program that reads 3 string and print the smallest string 

const firstString = "papaya";
const secondString = "banana";
const thirdString = "watermelon";

const lengthOfFirstString = firstString.length;
const lengthOfSecondtString = secondString.length;
const lengthOfThirdString = thirdString.length;

if(lengthOfFirstString < lengthOfSecondtString && lengthOfFirstString < lengthOfThirdString){
    console.log(`${firstString} is the smallest string`)
} else if(lengthOfSecondtString < lengthOfFirstString && lengthOfSecondtString < lengthOfThirdString){
    console.log(`${secondString} is smallest string`)
} else if(lengthOfThirdString < lengthOfFirstString && lengthOfThirdString < lengthOfSecondtString){
     console.log(`${thirdStringString} is smallest string`)
}else {
    console.log(' two string are same length')
}

