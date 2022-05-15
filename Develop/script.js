// Assignment code here


var pswl; // Password length 8 to 128 characters
var cflc; // confirm lower case
var cfuc; // confirm upper case
var cfnum; // confirm number
var cfSpec; // confirm special characters
var userChoices;

var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// This is the function to prompt the passwork
function generatePassword() {
  pswl = parseInt(prompt('Your password must have:\n - The length between 8 and 128 characters.\n - One lower case.\n - One upper case.\n - One number.\n - One special character.\n   * Please input the length of your password below by number:'));
  console.log("Password length" + pswl);
  
  // If the password length is not meeting the condition, -> alert, then pop message for length condition , if pswl is meeting the condition,  user will choose the criteria
  if(!pswl) {
    alert("Required value");

  } else if (pswl < 8 || pswl > 128) {
    pswl = parseInt(prompt("You must choose between 8 and 128"));
    
  } else {
   
    cflc = confirm("Will this password contain lower case letters?");
    
    cfuc = confirm('Will this password contain upper case letter?');
    
    cfnum = confirm('Will password this contain number?');
    
    cfSpec = confirm('Will this password contain special characters?');
    
  
  }; 

 
   // If non of the criteria were confirmed -> alert the message, ortherwise will filter out by user selection
  
   if (!cflc && !cfuc && !cfnum && !cfSpec) {
    userChoices = alert('Please choose your password accoring to the criteria!');

  } else if (cflc && cfuc && cfnum && cfSpec) {
    userChoices = lower.concat(upper, numbers, special);
  
  } else if (cflc && cfuc && cfnum) {
    userChoices = lower.concat(upper, numbers);
  
  } else if (cflc && cfuc && cfSpec) {
    userChoices = lower.concat(upper, special);
  
  } else if (cflc && cfnum && cfSpec) {
    userChoices = lower.concat(numbers, special);
  
  } else if (cfuc && cfnum && cfSpec) {
    userChoices = upper.concat(numbers, special);
  
  } else if (cflc && cfuc) {
    userChoices = lower.concat(upper);
  
  } else if (cflc && cfnum) {
    userChoices = lower.concat(numbers);
  
  } else if (cflc && cfSpec) {
    userChoices = lower.concat(special);
  
  } else if (cfuc && cfnum) {
    userChoices = upper.concat(numbers);
  
  } else if (cfuc && cfSpec) {
    userChoices = upper.concat(special);
  
  } else if (cfnum && cfSpec) {
    userChoices = numbers.concat(special);
  
  } else if (cflc) {
    userChoices = lower;
  
  } else if (cfuc) {
    userChoices = blankUpper.concat(upper);
  
  } else if (cfnum) {
    userChoices = numbers;
  
  } else if (cfSpec) {
    userChoices = special;
 
  };


  var Blank = []; // Emty variable for input user password
  var combinePW;
  
  // CombinePW will be picked up randomly according to userChoises
  for (var i = 0; i < pswl; i++) {
    combinePW = userChoices[Math.floor(Math.random() * userChoices.length)];
    Blank.push(combinePW);
  }
  
  // Join the array to the string
  var password = Blank.join("");
  console.log("Your Pasword is: " + password);
  return password;
  
}

