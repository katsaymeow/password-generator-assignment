var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "o", "p", "q", "r", "s", "t", "u", "v", "w", "xx", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Zed"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbols = ["!", "@", "#", "$", "%", "&"];
var globalCharSet = [];
var password = "";


function promptTheUser(e) {
    if(e) {
        e.preventDefault()
    }
   
    var wantLower = window.confirm("Will the Little letters do?");
    var wantUpper = window.confirm("UPPER ME !!!!");
    var wantSym = window.confirm("*%#($!)# please?");
    var wantNum = window.confirm("Alphanumeric");
    var UserPassLength = window.prompt("Choose a password length between 8 and 35");   
    if (UserPassLength > 35 || UserPassLength < 8 ){
        alert("Sooo... you know you can't have a password without playing buy the rules.");
        promptTheUser();
    } 
    if (wantLower || wantUpper || wantSym || wantNum) {
        globalCharSet = globalCharSet.concat(lowercase);
        globalCharSet = globalCharSet.concat(uppercase);
        globalCharSet = globalCharSet.concat(symbols);
        globalCharSet = globalCharSet.concat(numbers);
    }
     var password = "" ;
        for (var i=0; i< UserPassLength; i++) {
            password += globalCharSet[Math.floor(Math.random()*globalCharSet.length)];
        }  
        return passwordText.value = password   
}
        


   
generateBtn.addEventListener("click", promptTheUser); 
