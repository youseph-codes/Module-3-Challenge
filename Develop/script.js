// Assignment code here
var passwordLength = 8;
var choices = [];

var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',]
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',]
var numbers = ['0','1','2','3','4','5','6','7','8','9',]
var symbols = ['!','@','#','$','%','^','&','*','<','=','>','+','~','?',]

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var rightprompts = prompts();
  var passwordText = document.querySelector("#password");


  if (rightprompts) {
    var newPassword = generatePassword();
    passwordText.value = newPassword;
  } else {
    passwordText.value = "";
  }
}

function generatePassword() {
  var password = "";
  for (var i = 0; i < passwordLength; i++) {
      var index = Math.floor(Math.random() * choices.length);
      password = password + choices[index];
  }
  return password;
}

function prompts() {
  choices = [];

  passwordLength = parseInt(prompt("How long to you want your password to be? (between 8 -128 characters!"))

  if (isNaN(passwordLength) || passwordLength > 128 || passwordLength < 8) {
    alert("The chosen length of your password must be written as a digit (example: 12, 10, 21. not: twelve, ten, twenty-one). Please try again.");
    return false;
  }

  if (confirm("Do you want lowercase letters in your password?")) {
    choices = choices.concat(lowerCase);
  }

  if (confirm("Do you want uppercase letters in your password?")) {
    choices = choices.concat(upperCase);
  }

  if (confirm("Do you want numbers in your password?")) {
    choices = choices.concat(numbers);
  }
  if (confirm("Do you want special characters in your password?")) {
    choices = choices.concat(symbols);
  }
  return true
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
