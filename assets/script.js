// Assignment Code 

var generateBtn = document.querySelector("#generate");//generate is the button id

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");//this will generate the password in the field. 

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword ());



// using Math.random and Math.floor
console.log(generateBtn);
console.log(password);
console.log(passwordText)