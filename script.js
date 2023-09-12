// these are my charater options for the user.
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '1234567890';
const specialChar = '!@#$%^&*()_+<>?';

// this gets references to the #generate element
var generateBtn = document.querySelector("#generate");

// this function to prompts the user for password criteria
function generatePassword() {
  //this prompts the user for the password length
  var passwordLength = prompt("Enter the length of the password (between 8 and 128 characters):");
  
  // Validate input for password length
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Invalid password length. Please enter a number between 8 and 128.");
    return ""; // this returns a empty string is invalid length is entered
  }
  
  // this prompts the user to select their options for what they want in their password
  var useLowerCase = confirm("Include lowercase letters?");
  var useUpperCase = confirm("Include uppercase letters?");
  var useNumbers = confirm("Include numbers?");
  var useSpecialChar = confirm("Include special characters?");
  
  // this requires the user to choose atleast one character set
  if (!useLowerCase && !useUpperCase && !useNumbers && !useSpecialChar) {
    alert("At least one character set must be selected.");
    return ""; // Return an empty string if no character set is selected.
  }
  
  // i created a character set based on the users selection.
  var charset = "";
  if (useLowerCase) charset += lowerCase;
  if (useUpperCase) charset += upperCase;
  if (useNumbers) charset += numbers;
  if (useSpecialChar) charset += specialChar;
  
  // this generates the password
  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex);
  }
  
  return password;
}

// this writes password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// this adds the event listener to the gen. button
generateBtn.addEventListener("click", writePassword);