// Character sets or options for user
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '1234567890';
const specialChar = '!@#$%^&*()_+<>?';

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Function to prompt the user for password criteria and generate a password
function generatePassword() {
  // Prompt the user for password length
  var passwordLength = prompt("Enter the length of the password (between 8 and 128 characters):");
  
  // Validate input for password length
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Invalid password length. Please enter a number between 8 and 128.");
    return ""; // Return an empty string if the input is invalid.
  }
  
  // Confirm which character sets to include
  var useLowerCase = confirm("Include lowercase letters?");
  var useUpperCase = confirm("Include uppercase letters?");
  var useNumbers = confirm("Include numbers?");
  var useSpecialChar = confirm("Include special characters?");
  
  // Validate that at least one character set is selected
  if (!useLowerCase && !useUpperCase && !useNumbers && !useSpecialChar) {
    alert("At least one character set must be selected.");
    return ""; // Return an empty string if no character set is selected.
  }
  
  // Create a character set based on user selections
  var charset = "";
  if (useLowerCase) charset += lowerCase;
  if (useUpperCase) charset += upperCase;
  if (useNumbers) charset += numbers;
  if (useSpecialChar) charset += specialChar;
  
  // Generate the password
  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex);
  }
  
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);