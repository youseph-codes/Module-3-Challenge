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
    var newPassword = generatedPassword();
    passwordText.value = newPassword;
  } else {
    passwordText.value = "";
  }
}



function prompts() {
  choice = [];

  passwordLength = parseInt(prompt("How long do you want your password to be? (between 8 - 128 characters!"))

  if (isNaN(passwordLength) || passwordLength > 128 || passwordLength < 8) {
    alert("Please choose a length that's between 8 and 128!");
    return false;
  }

  if (confirm("Do you want lowercase letters in your password?")) {
    choice = choice.concat(lowercase);
  }

  if (confirm("Do you want uppercase letters in your password?")) {
    choice = choice.concat(uppercase);
  }

  if (confirm("Do you want numbers in your password?")) {
    choice = choice.concat(numbers);
  }

  if (confirm("Do you want special characters in your password?")) {
    choice = choice.concat(symbols);
  }
  return true
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);