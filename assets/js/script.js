// Assignment Code
var generateBtn = document.querySelector("#generate");



//Password random array function
function getRandomPostionInArray(arrayLength) {
  
  var randomNumber=Math.random();
  
  var randomValue=randomNumber*arrayLength
  
  return Math.floor(randomValue)

}

function generateRandomNumbers() {
  var numbers=[0,1,2,3,4,5,6,7,8,9];
  
  var randomPosition=getRandomPostionInArray(numbers.length);
  
  return numbers[randomPosition];

}

function generateRandomLowerCaseLetter() {
  
  var lowerCaseLettters=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

  var randomPosition=getRandomPostionInArray(lowerCaseLettters.length)
  
  return lowerCaseLettters[randomPosition];

}



function generateRandomUpperCaseLetter() {
  
  var upperCaseLetters=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

  var randomPosition=getRandomPostionInArray(upperCaseLetters.length)

  return upperCaseLetters[randomPosition];

}



function generateRandomSpecialCharacter() {
  
  var specialCharacters=["!","#","$","%","&","'","(",")","*","+","-",".","/",":",";","<","=",">","?","@","[","^","_","`","{","|","}","~","]",";"];

  var randomPosition=getRandomPostionInArray(specialCharacters.length)

  return specialCharacters[randomPosition];

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  var passwordLength = prompt("Password must be between 8 and 128 character")
  if (length < 7 || length > 129 ) {
  
  alert("criteria not met please enter number between 8 and 128")
 
}
  generateRandomUpperCaseLetter = window.confirm("Add random uppercase letters?")
  var passwordLength = window.confirm("Add random lowercase letters?")
  var passwordLength = window.confirm("Add random special characters?")
  var passwordLength = window.confirm("Add random numbers?")
  
  var includeRandompositionInArray=true
  var includeSpecialCharacters=true
  var includeUpperCaseLetter=true
  var includeLowerCaseLetter=true 
  
  passwordText.value = password;

  function generatePassword() {
    return passwordText




  }

  

// User prompt

}






// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 



writePassword()