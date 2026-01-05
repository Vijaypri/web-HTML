let displayMessage = "I am a student at Geeks for Geeks"
let count = 0;
for(let char of displayMessage){
    if(char ===  "g"){
        count++
    }
}
console.log(count)

function findCharacter(text, char){
    const index = text.indexOf(char)
    if(index === -1){
        return "Character not found"
    } else{
        return "Character found in the string"
    }
}

const result = findCharacter("priya vijayvargiya", "q")
console.log(result, "======================================")

let a = [1,2,3,4,5,6,6,7,7,7,]
console.log(a.sort(10>1))