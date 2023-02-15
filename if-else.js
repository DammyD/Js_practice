// Control Flow
// Conditional Statement

// if...else

let myAge = 13;
let eligibleVoteAge = 18;
// if age  is greater than or equal to 18, print 'Eligible to vote'
//  if age is less than 18, print 'Not Eligible to vote'

if (myAge >= eligibleVoteAge) {
// output is when condition evaluates to true
console.log('Eligible to Vote');
} else {
// output is when condition evaluates to false
console.log('Not Eligible to Vote')
}

// we want to output the exact grade the student had based on their score
// if score >= 70, A1
// if score is between 65 & 69, B2
// if score is between 60 & 64, B3
// if score is between 55 & 59, C4
// if score is between 50 & 55, C5
// if score is between 45 & 49, C6
// if score is between 41 & 44, D7
// if score is between 31 & 40, E8
// if score is below 30, F9
let mathScore = 120;
if (mathScore >= 70 && mathScore <= 100) {
    console.log('A1');
} else if (mathScore >= 65 && mathScore <= 69) {
    console.log('B2');
} else if (mathScore >= 60 && mathScore <= 64) {
    console.log('B3');
} else if (mathScore >= 55 && mathScore <= 59) {
    console.log('C4');
} else if (mathScore >= 50 && mathScore <= 54) {
    console.log('C5');
} else if (mathScore >= 45 && mathScore <= 49) {
    console.log('C6');
} else if (mathScore >= 40 && mathScore <= 44) {
    console.log('D7');
} else if (mathScore >= 31 && mathScore <= 39) {
    console.log('E8');
} else if (mathScore >= 0 && mathScore <= 30) {
    console.log('F9');
} else {
    console.log('Invalid score');
}
