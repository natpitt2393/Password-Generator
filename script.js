//Data. This is where I am going to store the variables.
var generateBtn = document.querySelector("#generate");


var specialCharStr = "!@#$%^&*~`+=-_<>/?[]{}|()";
var uppcaseLettersStr = "QWERTYUIOPASDFGHJKLZXCVBNM";
var lowcaseLettersStr = "qwertyuiopasdfghjklzxcvbnm";
var numStr = "0123456789";

var specialCharArr = specialCharStr.split("");
var uppcaseLettersArr = uppcaseLettersStr.split("");
var lowcaseLettersArr = lowcaseLettersStr.split("");
var numArr = numStr.split("");


var userCharPool = [];

var passwordArr = [];

//This is the function that will execute when you press the generate the password button


var userChoiceLength = prompt("Enter password length. Must be between 8 and 128 characters.");
if (userChoiceLength < 8 || userChoiceLength > 128) {
    alert("Please follow directions!");
}
// then use confirm method to ask if user wants to use special characters, numbers, lowercase, etc..
// Main Process 
var userChoiceSpecialChar = confirm("Would you like to include special characters?");
console.log(userChoiceSpecialChar);
var userChoiceUppcase = confirm("Would you like to include upper case characters?");
console.log(userChoiceUppcase);
var userChoiceLowcase = confirm("Would you like to include lower case letters?");
console.log(userChoiceLowcase);
var userChoiceNum = confirm("Would you like to include numbers?");
console.log(userChoiceNum);

function copyArrayPool(arr) {
    for (var i = 0; i < arr.length; i++) {
      userCharPool.push(arr[i]);
  
    } console.log(userCharPool);
    return;
  }
  
  if (userChoiceSpecialChar) {
    copyArrayPool(specialCharArr);
    console.log(userCharPool);
  }
  
  if (userChoiceUppcase) {
    copyArrayPool(uppcaseLettersArr);
    console.log(userCharPool);
  }
  
  if (userChoiceLowcase) {
    copyArrayPool(lowcaseLettersArr);
    console.log(userCharPool);
  }
  
  if (userChoiceNum) {
    copyArrayPool(numArr);
    console.log(userCharPool);
  }


for (var i = 0; i < userChoiceLength; i++) {
    var index = Math.floor(Math.random() * userCharPool.length);
  
    passwordArr.push(userCharPool[index]);
  }

console.log(passwordArr);
var completePassword = alert("Please click generate password.");


function generatePassword() {
    var password = passwordArr.join("");
    return password;
  }
  
  function writePassword() {
    var password = generatePassword();
    var passwordTextEl = document.getElementById("password");
  
    passwordTextEl.value = password;
  
    return;
  
  };
  
  generateBtn.addEventListener("click", writePassword);