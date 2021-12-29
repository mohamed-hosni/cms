// const firstName = 'Ali';
// console.log(firstName.length);

// Object

// let user = new Object();
// let user = {};

// let user = {
//   // Create
//   name: 'Ali',
//   age: 20,
//   // let: 1,
//   'likes birds': true,
//   keyName: 'hamada',
// };

// const first name = 1;
// user.isAdmin = true; // Add
// console.log(user);
// console.log(`Name: ${user.name}`); // Read
// delete user.age // Delete
// user.isAdmin = null;
// console.log('Age:', user.age);
// console.log(user);

// console.log(user['likes birds']);
// console.log(user['name']);

// let keyName = prompt('Enter object key:');
// alert(user[keyName]);
// let keyName = 'name';
// console.log(user.keyName); // undefined
// console.log(user['keyName']); // undefined
// console.log(user[keyName => "name"]); // Ali
// user.name = 'salah';
// user['likes birds'] = false;
// console.log(user);

// Arrays
// let arr = new Array(); // Empty array
// let arr = [];
// let fruits = ['Apple', 'Orange']; // Create 0, 1
// console.log(fruits);
// let newLength = fruits.push('banana', 'dates');
// console.log(fruits);
// fruits.pop();
// console.log(fruits);
// fruits.shift();
// console.log(fruits);
// fruits.unshift('dates');
// console.log(fruits);

// console.log(fruits[0]); // Read
// console.log(fruits[1]); // Read
// console.log(fruits.length); // 2
// console.log(fruits);

// If
// const age = 11;

// if (age > 10) {
//   console.log('Allowed');
// } else if (age == 10) {
//   console.log("Exact");
// } else {
//   console.log('Not allowed.');
// }

// if (age > 10) {
//   console.log('Allowed');
// } else if (age == 10) {
//   console.log("Exact");
// } else {
//   console.log('Not allowed.');
// }
// let age = prompt("Your age?")
// let accessAllowed = (age > 18) ? 'Allowed' : 'Not Allowed';
// let message = age < 3 ? 'Hi, baby!' :
// age < 18 ? 'Hello!' : age < 100 ? 'Greetings' : 'none'
// alert(accessAllowed);

// Loops

// while(condition){
//    code
// }
// let i = 0;
// while(i < 3){
//   console.log(i);
//   i++;
// }

// do {
//   body;
// } while (condition);

// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i < 3);

// for(begin; condition; step){
//   body
// }

// for (let i = 0; i < 3; i++) {
//   console.log(i);
// }
// console.log(i);
// let i = 0;

// for (;; ) {
//   console.log(i);
//   i++;
//   if(! (i < 3)){
//     break;
//   }
// }

// for(let i  = 0; i < 10; i++){
//   if(i % 2 == 0) continue;
//   console.log(i);
// }

// Switch
// let age = 18;

// switch (age) {
//   case 10:
//     console.log('Too small');
//     break;
//   case 18:
//     console.log('Exact');
//     break;
//   default:
//     console.log('Not found');
// }

// Function
/*
function fnName(?param1, param2...){
  body
}
*/

// showMessage('Ali');
// showMessage('Marwa');
// showMessage('seham');
// showMessage('Salah');
// showMessage();

// function showMessage(name = "User") {
//   let message = `Hello ${name}!`;
//   console.log(message);
// }

// function sum(num1 = 0, num2 = 0){
// code
//   return num1 + num2;
// }

// const result = sum(5);
// console.log(result);
// console.log(document);
// document.body.children[0].style.background = "red";
// console.log(document.body.children[0].style.background);
// const divEl = document
// const divEl = document.getElementsByTagName('div');
// divEl.style.background = "Blue";
// console.log(divEl);
// const divEl = document.querySelector('div');
// console.log(divEl);

// let elements = document.querySelectorAll('ul > li:last-child');
// console.log(elements);

// for (let i = 0; i < elements.length; i++) {
//   const element = elements[i];
//   console.log(element);
//   console.log(element.innerHTML);
// }

// Create Div element
// let div = document.createElement('div');
// Add class alert
// div.classList.add('alert');
// Add html > text message
// div.innerHTML = "<strong>Hi there!</strong> This is important message!!";
// Append to body
// document.body.append(div);
// document.body.prepend(div);


x=prompt("welcome","welcome to github");

