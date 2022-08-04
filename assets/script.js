// Assignment Code 
//do the window.confim first for charaters
var generateBtn = document.querySelector("#generate");
var userPassLength = document.getElementById("length");
var upDom = document.getElementById("uppercase");
var numDom = document.getElementById("numbers");
var symDom = document.getElementById("symbols");
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "o", "p", "q", "r", "s", "t", "u", "v", "w", "xx", "y", "z"];// lowercase is default
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I","J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Zed"];
var numbers = ["0","1","2", "3", "4", "5", "6", "7", "8", "9"];
var symbols = ["!", "@", "#","$", "%", "&"];

//console.log(uppercase, lowercase, numbers, symbols, userPassLength, upDom, numDom, symDom);
//this logs the the class 'wrapper' and userPassLength logs correct

let passwordText = (low, high) => {
  const array =//does the array need userpasslength?
  [lowercase,
  uppercase,
  numbers,
  symbols];
  for (let i = low; i <= high; i++) {
    array.push(i);
  };
};
console.log(passwordText)
//generate is the button id
/* input boxes values password funtions if, then */
// Write password to the #password input

// validate var
//generate password with criteria

function generatePassword() {
  passwordText, [
 includeUp = upDom.checked,
 includeNum = numDom.checked,
 includeSym = symDom.checked,
  lowercase]
  
}



// Add event listener to generate button
generateBtn.addEventListener("click", (e) => { 
  e.preventDefault();
  
});

//console.log(writePassword)
// using Math.random and Math.floor
// console.log(generateBtn);-this comes from html #generate,.btn
// console.log(password); this is the generatePassword function
//console.log(passwordText)-this will come from this page


/* var needed - numbers, lowercase, uppercase, characters, length assignment with user input. 

*a querySelector is a document method that returns the first elemnt within the document that matches the specified *selector or grouped selectors. 

*need to practice Math operations not sure the logic yet

*each page action must be assgined - but how?
*/
