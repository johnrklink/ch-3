// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector(makeid(12));

  passwordText.value = password;

}

function generatePassword() {
  var charSets = {
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    numeric: '0123456789',
    special: ' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
  };
}

var writePassword = "copypassword"


var length = Number(prompt("Enter a password length between 8 and 128")),
  charType = prompt("Enter a character type: special, numeric, uppercase, lowercase."),
  password = generatePassword();
document.getElementById("password").value = password;
document.getElementById('btn').addEventListener('click', copyPassword);



function copyPassword() {
  document.getElementById("").select();
  document.execCommand("Copy");
  
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());
  document.getElementById("password").innerHTML = "copypassword";
