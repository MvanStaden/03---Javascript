// let firstName = "Bob";
// console.log(firstName);

// let javascriptIsFun = "true";
// console.log(javascriptIsFun);

// console.log(typeof javascriptIsFun);
// console.log(typeof true);
// console.log(typeof "C");
// console.log(typeof 23);
// console.log(typeof null);

//Let allows you to change values later
//const doesnt allow you to change values later

/**Let****/
//Only use let when you know that your variable is going to change

/*
let age = 30;
age = 40;
*/

// const birthYear = 1991;
// birthYear = 2000;

/**Const keyword**/
//Cannot declare empty const variable
//best practice to use const.
/* 
const job;
*/

/**Var keyword**/
/*
var job = "Programmer";
job = "Teacher";
*/

/*******************Operators******************/
// const currentYear = 2037;
// const ageMarius = currentYear - 1991;
// const ageSarah = currentYear - 2018;

// console.log(ageMarius, ageSarah);
// console.log(ageSarah);

// //2**3 means 2 to the power 3 = 2 * 2 * 2
// console.log(ageMarius * 2, ageMarius / 2, 2 ** 3);

// const firstName = "Marius";
// const lastName = "van Staden";

// console.log(firstName + " " + lastName);

/*******************Assignment Operators******************/

// let x = 10 + 5;

// //+= means x = x + 10
// x += 10;
// console.log(x);

// //Comparison operators
// console.log(ageMarius > ageSarah);
// console.log(ageSarah >= 10);

// const isFullAge = ageSarah >= 10;

/*******************Operator Precedence******************/

// const currentYear = 2037;
// const ageMarius = currentYear - 1991;
// const ageSarah = currentYear - 2018;

// //The order the below state is calculated.

// //Math operators ranks higher as Assignment operators when calcuating
// console.log(currentYear - 1991 > currentYear - 2018);
// console.log(ageSarah);

/*******************Strings and Template literals******************/

// const firstName = "Marius";
// const job = "Developer";
// const birthYear = 1991;
// const age = 2021 - birthYear;

// const marius = "I'm " + firstName + ", a " + age + " old " + job;
// console.log(marius);

// const marius2 = `I'm ${firstName}, a ${age} old ${job}`;
// console.log(marius2);

// console.log("String with \n\
// Multiple\n\
// lines");

// console.log(`String with
// multple
// lines`);

/*******************If / else Statements******************/

// const age = 19;

// if (age >= 18) {
//   console.log("You are valid to drive 😆");
// } else {
//   console.log("You can not drive yet 😢");
// }

// const birthYear = 2001;

// let century;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }

// console.log(century);

////////////////////////////////////
// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/

// const markHeight = 1.69;
// const markWeight = 78;
// const johnHeight = 1.95;
// const johnWeight = 92;

// const markBmi = markWeight / (markHeight * markHeight);
// const johnBmi = johnWeight / (johnHeight * johnHeight);

// console.log(markBmi, johnBmi);
// const markHigherBmi = markBmi > johnBmi;

// console.log(markHigherBmi);

////////////////////////////////////
// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/

// const markHeight = 1.69;
// const markWeight = 78;
// const johnHeight = 1.95;
// const johnWeight = 92;

// // const markHeight = 1.88;
// // const markWeight = 95;
// // const johnHeight = 1.76;
// // const johnWeight = 85;

// const markBmi = markWeight / (markHeight * markHeight);
// const johnBmi = johnWeight / (johnHeight * johnHeight);

// if (markBmi > johnBmi) {
//   console.log(`Mark's BMI (${markBmi}) is higher than John's (${johnBmi})`);
// } else {
//   console.log(`John's BMI (${johnBmi}) is higher than Mark's (${markBmi})`);
// }

/*******************Type Conversion and Coersion******************/

//Type conversion is when you manualy convert from 1 type to another
//Type Coersion is when javascript change type behind the scenes for us

//TYPE CONVERSION
// const inputYear = "1991";
// //Cannot do calculations with string and int(Adds the 18 to the string)
// console.log(inputYear + 18);
// //Manually converting string inputyear to a number
// console.log(Number(inputYear) + 18);
// //A NaN Value ( not a Number)
// console.log(Number("Marius"));
// //Make a number a string
// console.log(String(23));

// //Type Coersion
// console.log(`I am ` + 23 + " Years Old"); // The number becomes a string
// console.log("12" - "10" - 1); //THe minues converts all strings to number
// console.log("10" * "2"); //

// let n = "1" + 1;
// n = n - 1;
// console.log(n);

// console.log(2 + 3 + 4 + "5");
// console.log("10" - "4" - "3" - 2 + "5");

/*******************Truthy and Falsy Values******************/
//Falsy are values that are not exactly false but becomes false
// 5 Falsy Values: 0, '', Undefined, Null, NaN

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("Marius"));
// console.log(Boolean({}));

// const money = 1;
// if (money) {
//   console.log(`Don't spend all your money`);
// } else {
//   console.log(`You should get a job`);
// }

// let height = 0;

// if (height) {
//   console.log(`YAY! Height is ${height}`);
// } else {
//   console.log(`Awwww! Height is ${height}`);
// }

/*******************Equality Operator == vs ===******************/
// // === : Strict Operator
// const age = 18;
// //Strict means that the value needs to be exactly === (age needs to === a number)
// if (age === 18) console.log(`You just became an adult(Strict)`);

// if (age == "18") console.log(`You just became an adult(Loose)`);

// const favourite = Number(prompt("Your favourite number?"));
// console.log(favourite);

// if (favourite === 23) {
//   console.log("23 is the winning number");
// } else if (favourite === 7) {
//   console.log("7 is another winning number");
// } else {
//   console.log("Better luck next time");
// }

// if (favourite !== 23) console.log("You have not chosen the winning number");

/****************************Boolean Logic******************/

const hasDriversLicense = true; //A
const hasGoodVision = true; //B
const isTired = true;

console.log(hasDriversLicense && hasGoodVision);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log(`You are allowed to drive. 😁`);
} else if (hasDriversLicense && !hasGoodVision) {
  console.log(`You are not allowed to drive. 😢`);
} else if (hasDriversLicense || hasGoodVision) {
  console.log(`Someone else should drive. 😒`);
}

// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/

// const dScore1 = 97;
// const dScore2 = 112;
// const dScore3 = 101;

// const kScore1 = 109;
// const kScore2 = 95;
// const kScore3 = 106;

// const dAverage = (dScore1 + dScore2 + dScore3) / 3;
// const kAverage = (kScore1 + kScore2 + kScore3) / 3;

// if (dAverage > kAverage) {
//   console.log(`Dolphins wins with a score of ${dAverage}!!!🏆🏆🏆`);
// } else if (dAverage < kAverage) {
//   console.log(`Koalas wins with a score of ${kAverage}!!!🏆🏆🏆`);
// } else {
//   console.log(
//     `Its a Draw!! Dolphins scored: ${dAverage} and Koalas scored: ${kAverage}`
//   );
// }

// //Bonus 1
// if (dAverage >= 100 && dAverage > kAverage) {
//   console.log(`Dolphins wins with a score of ${dAverage}!!!🏆🏆`);
// } else if (kAverage >= 100 && kAverage > dAverage) {
//   console.log(`Koalas wins with a score of ${kAverage}!!!🏆🏆`);
// } else if (dAverage === kAverage && dAverage >= 100 && kAverage >= 100) {
//   console.log(
//     `Its a Draw!! Dolphins scored: ${dAverage} and Koalas scored: ${kAverage}`
//   );
// } else {
//   console.log(`Nor the Dolphins or the Koalas Won`);
// }

// //Bonus 2
// if (dAverage && kAverage >= 100) {
//   console.log(
//     `Its a Draw!! Dolphins scored: ${dAverage}🏆 and Koalas scored: ${kAverage}🏆`
//   );
// } else if (dAverage < 100 || kAverage > 100) {
//   console.log(`No Team won the 🏆🏆🏆`);
// }

/****************************Switch Statement******************/
const day = prompt("Enter the day of the week");

switch (day) {
  case "Monday":
    console.log("Today is Monday");
    break;
  case "Tuesday":
    console.log("Today is Tuesday");
    break;
  case "Wednesday":
  case "Thursday":
    console.log("Today we have Zoom meetings");
    break;
  case "Friday":
    console.log("Friday we practice all our work for the week");
    break;
  case "Saterday":
  case "Sunday":
    console.log("On the weekend we rest and think about the weeks work");
    break;
  default:
    console.log("The day you enter does not exist.");
    break;
}

if (day === "Monday") {
  console.log("Today is Monday");
} else if (day === "Tuesday") {
  console.log("Today is Tuesday");
} else if (day === "Wednesday" || day === "Thursday") {
  console.log("Coding ChallengesTh");
} else if (day === "Friday") {
  console.log("Friday we practice all our work for the week");
} else if (day === "Saterday" || day === "Sunday") {
  console.log("On the weekend we rest and think about the weeks work");
} else {
  console.log("The day you enter does not exist.");
}
