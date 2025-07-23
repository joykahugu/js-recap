console.log('Hello, World!');
let firstName = 'John';
console.log(`My name is ${firstName}.`); //use backticks when mixing variable with normal text
let message = "My name is " + firstName + ".";//same thing as above(concatenation)
console.log(message);
//let age = '20';
//let age2 = parseInt(age);
//console.log (age2);
console.log(firstName.length);
console.log(firstName.toLowerCase());
console.log(firstName.toUpperCase());

// Numbers
let num = 10.56;
console.log(typeof num);

console.log(5 / 0);
console.log(-5 / 0);

console.log('Hi' / 2);
console.log(Math.sqrt(-1));

let largeNumber = 6873940928490508677n; //formats it by rounding off towards the end, add an n at the end to display whole thing
console.log(largeNumber); //OR
let lNumber = BigInt("6873940928490508677"); //also displays the whole number without formatting
console.log(lNumber);
console.log(largeNumber + lNumber);
console.log(largeNumber * lNumber);

let num1 = 10;
let num2 = 5;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);
console.log(5 % 2);
console.log(num1 ** num2); //raising to power of num2

console.log(Math.sqrt(16));
console.log(Math.floor(16.9));
console.log(Math.ceil(16.1));
console.log(Math.round(16.45665656));
let num3 = 16.45665656;
console.log(num3.toFixed(2));//tofixed allows you to round off to however many d.ps

const radius = 5
const height = 12
let volume = Math.PI * (radius ** 2) * height;
console.log(volume.toFixed(2));
let area = Math.PI * (radius**2) + (Math.PI * (radius * 2) * height);
console.log(area);
let isLoggedIn = true;
let hasPermission = false;

//undefined : declared variable without assigned value 
let lastName;
console.log (lastName);
console.log (typeof lastName);

//null : intentional absence of any object value
//let gender = null;
//console.log(gender);

let name = 'john';
let age = '30';
let isStudent = true;
let gender = 'male';

let person = {
    name: 'John',
    age: 30,
    isStudent: true,
    gender: 'male',
    address: {
        city:' Nairobi',
        street: 'Mpaka Road',
    },
};
person.age = 50; //updates age
person.address.city = 'Mombasa' //updates address
person['name'] = 'Bob'; //change value using bracket notation
console.log(person);
console.log(person.age);
console.log(person.address.city);
console.log(person['gender']);//bracket notation

//Arrays(lists)
const laptops = ['Macbook', 'HP', 'Lenovo', 'Dell'];
console.log(laptops);

let mixedArray = ['John', true, 40, null, undefined, {gender: 'male'}];
console.log(mixedArray)
console.log(laptops[1]);
console.log(mixedArray[5].gender)
console.log(mixedArray.length)

laptops.push('Toshiba');
laptops.unshift('Asus');
laptops.splice(2, 0, 'Acer');
console.log(laptops);
console.log(laptops.indexOf('Dell'));
laptops.pop();
laptops.shift(); //removes index 0
console.log(laptops);
laptops.splice(2, 1) //removes 1 from index 2
console.log(laptops);

const sortedArray = laptops.sort();
console.log(sortedArray) //arranged alphabetically

const reversedArray = sortedArray.reverse();
console.log(reversedArray);
//map, forEach, 

const group = [
    {name: 'James', age: 20, city: 'Nairobi'},
    {name: 'Jane', age: 30, city: 'Mombasa'},
    {name: 'Steve', age: 45, city: 'Nairobi'},
    {name: 'Moses', age: 25, city: 'Mombasa'},
];

// function groupBy(group, city) {
//    Object.groupBy(group, ({city}) => city);
  
//  }
// console.log (Object.groupBy(${city}));

const grouped= Object.groupBy(group, ({city}) => city);
console.log(grouped);









