// Variables — three ways to declare

// var — old way, avoid in modern JavaScript
var name = "Mends Elvis";

// let — use when the value will change
let age = 18;

// const — use when the value will not change
const job = "Full Stack Developer";

// Reassigning let
age = 19;

// Datatypes

// String
let firstName = "Mends";
let lastName = "Elvis";

// Number
let year = 2026;
let price = 9.99;

// Boolean
let isOnline = true;
let isLoggedIn = false;

// Null — intentionally empty value
let location = null;

// Undefined — declared but not assigned
let country;

// Array — a list of values
let skills = ["HTML", "CSS", "JavaScript", "React"];

// Object — a collection of key value pairs
let developer = {
  name: "Mends Elvis",
  age: 18,
  job: "Full Stack Developer",
  skills: ["HTML", "CSS", "JavaScript"],
  isAvailable: true
};

// Typeof — checking the datatype of a value
console.log(typeof firstName);
console.log(typeof year);
console.log(typeof isOnline);
console.log(typeof location);
console.log(typeof country);
console.log(typeof skills);
console.log(typeof developer);

// Template literals — cleaner way to build strings
console.log(`My name is ${firstName} ${lastName} and I am ${age} years old.`);

// String methods
console.log(firstName.toUpperCase());
console.log(firstName.toLowerCase());
console.log(firstName.length);

// Number methods
console.log(Math.round(9.7));
console.log(Math.floor(9.7));
console.log(Math.ceil(9.2));
console.log(Math.max(10, 20, 30));
console.log(Math.min(10, 20, 30));

// Array methods
console.log(skills.length);
console.log(skills[0]);
skills.push("Node.js");
console.log(skills);
skills.pop();
console.log(skills);

// Object access
console.log(developer.name);
console.log(developer.skills);
console.log(developer["age"]);node script.js