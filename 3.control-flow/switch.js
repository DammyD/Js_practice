// Swicth Statement - Is used in decision making and when you want to use equality operator

let studentGroup = 'Social Science';

let scienceSubjects = 'Physics, Chemistry, Biology, Technical Drawing, English, Mathematics';
let socialScienceSubjects = 'Accounting, Geology, commerece, Marketing, English, Mathematics';
let artsSubjects = 'Government, Economics, LIterature, History, English, Mathematics';
let generalSubjects = 'English, Mathematics';

//Assignment 1: Rewrite this using an if..else statement


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