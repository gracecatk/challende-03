// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// made the button clickable here to the log
function generatePassword() {
  console.log('you clicked me?! how dare you.')

// 1 Need to prompt the user for password length, upper, lower, numbers & special characters
//    length between 8 < 128
//    lower, upper, numbers, special char.
//2 validate input
//3 display the generated password



  return "Your Custom Password"; //made this display where the password will go
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
