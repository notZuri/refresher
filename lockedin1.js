//const name = `Ian`;
//const Byear = 2004;
//const age = 2025 - Byear;

//let isLoggedIn = false;
//isLoggedIn = true;

//console.log(`Welcome Back, ${name}. You are ${age} years old. Login status: ${isLoggedIn}`);


//✅ Your Task:
//Create a constant called username and set it to your name.
//Create a constant called yearNow set to 2025.
//Create a constant birthYear and calculate the age using yearNow - birthYear.
//Create a let variable called hasAccess and set it to false.
//Change hasAccess to true.

//Output this line using template literals:
//User Ian is 21 years old. Access granted: true


//const username = `Ian`;
//const yearNow = 2025;
//const birthYear = yearNow - 2004;
//let hasAccess = false;
//hasAccess = true;

//console.log(`User ${username} is ${birthYear} years old. Access granted: ${hasAccess}`);


//const userName = `Ian`;
//let userRole = `guest`;
//const yearJoined =  2022;
//const currentYear = 2025 - yearJoined;
//userRole = `admin`;

//console.log(`Hello ${userName}, you are now an ${userRole}. You've been in the system for ${currentYear} years.`);


const memberName = `Ian`;
const joinYear = 2021;
const currentYear = 2025;
let membershipStatus = `inactive`;
const membershipYears = currentYear - joinYear;
if (membershipYears >= 3) {
    membershipStatus = `active`;
}
else {
    membershipStatus = `inactive`;
}

console.log(`Hello ${memberName}, you have been a member since ${joinYear}. Your membership status is ${membershipStatus}.`);

