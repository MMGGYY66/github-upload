/*
Dogs mature at a faster rate than human beings.
We often say a dog’s age can be calculated in “dog years”
to account for their growth compared to a human of the same age.
In some ways we could say, time moves quickly for dogs — 8 years
in a human’s life equates to 45 years in a dog’s life.
How old would you be if you were a dog?

Here’s how you convert your age from “human years” to “dog years”:
The first 2 years of a dog’s life count as 10.5 dog years each.
first_2year_ofDog = 10.5
next_year_ofDog = 4
eight_year_of dog = (2 * first_2year_ofDog) + (6 * next_year_ofDog)
 */
// Create a variable named myAge, and set it equal to your age as a number.
const myAge = 51;
const first_2year_ofDog = 10.5;
const later_year_ofDog = 4;

// Create a variable named earlyYears and save the value 2 to it.
let earlyYears = 2;
console.log(earlyYears);

// Since we already accounted for the first two years, take the myAge variable,
// and subtract 2 from it.
let laterYears = myAge - earlyYears;


earlyYears *= first_2year_ofDog;
console.log(earlyYears);

console.log(laterYears);

// Multiply the laterYears variable by 4 to calculate the number of dog
// years accounted for by your later years.
laterYears *= later_year_ofDog;
console.log(laterYears);

// Add earlyYears and laterYears together,
// and store that in a variable named myAgeInDogYears.
const myAgeInDogYears = earlyYears + laterYears;


//Write your name as a string, call its
//built-in method .toLowerCase()
const myName = 'Mohamed Eldimardash'.toLowerCase();

// Write a console.log statement that displays
// your name and age in dog years.
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);

