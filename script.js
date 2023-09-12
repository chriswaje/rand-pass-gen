// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.',];
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',];
var upperCaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',];

// Write password to the #password input
function generatePassword() {
  var newPassword = [];
  var choices = [];

  var passLength = Number(window.prompt('Choose a password length between 8 and 128 characters'));
  
  if (passLength < 8 || passLength > 128) {
    alert('I said 8 to 128 characters!')
  }

  var specialChar = window.confirm('Do you want to include special characters?');
  var numericChar = window.confirm('Do you want to include numbers?');
  var lowerChar = window.confirm('Do you want to include lower case characters?');
  var upperChar = window.confirm('Do you want to include upper case characters?');

  if (specialChar === true) {
    choices = choices.concat(specialCharacters);
  }

  if (numericChar === true) {
    choices = choices.concat(numericCharacters);
  }

  if (lowerChar === true) {
    choices = choices.concat(lowerCaseCharacters);
  }
  if (upperChar === true) {
    choices = choices.concat(upperCaseCharacters);
  }

  for (var i = 0; i < passLength; i++) {
    newPassword.push(choices[Math.floor(Math.random() * choices.length)]);
  }

  return newPassword.join('');
}



function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
