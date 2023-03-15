// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var special = [' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.textContent = password;
}

function doRandom(arr) {
  var getRandom = Math.floor(Math.random() * arr.length);
  var randomEl = arr[getRandom];
  return randomEl;
}


function generatePassword() {
  var length = Number(prompt("Enter a password length between 8 and 128"));
  var password = "";
  var availableChars = [];

  if (length >= 8 && length <= 128) {
    
    var includeLowercase = confirm("Include lowercase characters?");
    var includeUppercase = confirm("Include uppercase characters?");
    var includeNumeric = confirm("Include numeric characters?");
    var includeSpecial = confirm("Include special characters?");

    
    if (includeLowercase) {
      availableChars = availableChars.concat(lowercase);
    }
    if (includeUppercase) {
      availableChars = availableChars.concat(uppercase);
    }
    if (includeNumeric) {
      availableChars = availableChars.concat(numeric);
    }
    if (includeSpecial) {
      availableChars = availableChars.concat(special);
    }

    
    for (var i = 0; i < length; i++) {
      password += doRandom(availableChars);
    }
  } else {
    alert("Invalid password length. Please enter a number between 8 and 128.");
  }

  return password;
}


generateBtn.addEventListener("click", writePassword);
