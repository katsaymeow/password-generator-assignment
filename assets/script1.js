// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "o", "p", "q", "r", "s", "t", "u", "v", "w", "xx", "y", "z"];// lowercase is default
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Zed"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbols = ["!", "@", "#", "$", "%", "&"];
var globalCharSet = [];

// var password = generatePassword(globalCharSet)
// Write password to the #password input
function writePassword() {
    var password = generatePassword(globalCharSet);
    passwordText.value = password;
}

function promptTheUser(e) {
    if(e) {
        e.preventDefault();
    };
    var wantLowercase = window.confirm ("Will little letters do?");
    var wantUppercase = window.confirm ("UPPERCASE ME !!!!");  
    var wantSymbols = window.confirm ("*^#) symbols");
    var wantNumbers = window.confirm ("Alphanumeric");
    var userPassLength = window.prompt ("Choose a password length between 8 to 35");

    // how to use if else statement. Example below:
    // if (condition you want to check goes in here) {
            // if the condition evaluates to true, run the code within
            // these squiggly brackets
        //} else {
            // do something else here if the condition evaluates to false
        //}

    if( userPassLength > 35 || userPassLength < 8) {
        alert("You did not follow directions. Shame! Please try again!");
        promptTheUser();
    };
    
    if (wantUppercase || wantLowercase || wantSymbols || wantNumbers ){
        // if wantUpperCase is true
        if(wantUppercase) {
            globalCharSet = globalCharSet.concat(uppercase);
            // console.log('globalCharSet is', globalCharSet);
        };
        if(wantLowercase) {
            globalCharSet = globalCharSet.concat(lowercase);
            // console.log('globalCharSet is', globalCharSet);
        };
        if(wantSymbols) {
            globalCharSet = globalCharSet.concat(symbols);
            // console.log('globalCharSet is', globalCharSet);
        };
        if(wantNumbers) {
            globalCharSet = globalCharSet.concat(numbers);
            // console.log('globalCharSet is', globalCharSet);
        };
}
}

function generatePassword(arrayofCharacters)
    // run for loop and randomly select a character from globalCharSet
        {
        let  = lowercase;
        if (wantUppercase) globalCharSet = globalCharSet.concat(uppercase);
        if (wantSymbols) globalCharSet = globalCharSet.concat(symbols);
        if (wantNumbers) globalCharSet = globalCharSet.concat(numbers);
        const  = [];
        for (let i = 0; i < userPassLength; i++) {
          const passwordText =
            globalCharSet[Math.floor(Math.random() * globalCharSet.length)];
          passwordText.push(String.fromGlobalCharSet(passwordText));
        }
        return result = writePassword.join('');
      };

// Add event listener to generate button
generateBtn.addEventListener("click", promptTheUser);  {
     textarea = passwordText.value;
    textarea.innerText = (writePassword(textarea.innerText) || 0) +1
}
