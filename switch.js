// Swicth Statement - Is used in decision making and when you want to use equality operator
// Science Subjects- Physics, Chemistry, Biology, Technical Drawing, English, Mathematics
// Social Science Subjects - Accounting, Geology, commerece, Marketing, English, Mathematics
// Arts Subjects - Government, Economics, LIterature, History, English, Mathematics

//Assignment 1: Rewrite this using an if..else statement
let studentGroup = 'SOCIAL SCIENCES';
switch (studentGroup) {
    case 'SCIENCE':
        console.log('Physics, Chemistry, Biology, Technical Drawing')
        break;
    case 'SOCIAL SCIENCES':
        console.log('Accounting, Geology, Commerce, Marketing')
        break;
    case 'ARTS':
        console.log('Government, Economics, LIterature, History')
        break;
    default:
        console.log('English, Mathematics')
        break;
}