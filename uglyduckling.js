const findLetter = (s, t) => {
    if (t.length - s.length !== 1 || s.length > 1000) {
        throw "Invalid input";
    }
    //if the length of the s is 0 return t 
    if (s.length === 0) {
        return t;
    }
    let arrS = turnIntoArr(s);
    let arrT = turnIntoArr(t);
    let sortedS = sortArray(arrS);
    let sortedT = sortArray(arrT);
    for (let i = 0; i < sortedT.length - 1; i++) {
        if (sortedS[i] !== sortedT[i]) {
            return sortedT[i];
        }
    }
    return sortedT[sortedT.length - 1];
}

//Function to turn the string into array
const turnIntoArr = (str) => str.toLowerCase().split("");
//using spread operator the following function creates a sorted copy of the string array
const sortArray = (arr) => [...arr].sort();

console.log(findLetter("abcd", "abcds"));
console.log(findLetter("abgbcfd", "aabbcgdf"));

console.log(findLetter("", "y"));
console.log(findLetter("a", "aa"));
console.log(findLetter("ae", "aea"));
try {
    console.log(findLetter("t", "tsajks"));
    console.log(findLetter("t", "t"));
} catch (e) {
    console.error(e);
}