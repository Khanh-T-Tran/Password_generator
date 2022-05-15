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
  pswl = prompt('Your password must have:\n - The length between 8 and 128 characters.\n - One lower case.\n - One upper case.\n - One number.\n - One special character.\n   * Please input the length of your password below by number:');
  console.log("Password length" + pswl);
  
  if(!pswl) {
    alert("Required value");

  } else if (pswl < 8 || pswl > 128) {
    pswl = prompt('You must choose between 8 and 128 characters');
    console.log('Password length' + pswl);
  
  } else {
   
    cflc = confirm("Will this password contain lower case letters?");
    console.log('Lower case' + cflc);
    cfuc = confirm('Will this password contain upper case letter?');
    console.log('Upper case' + cfuc);
    cfnum = confirm('Will password this contain number?');
    console.log('Number' + cfnum);
    cfSpec = confirm('Will this password contain special characters?');
    console.log('Special character' + cfSpec);
  
  }; 

 
   
  if (!cflc && !cfuc && !cfnum && !cfSpec) {
    userChoices = alert('Please choose your password accoring to the criteria!');

  } else if (cflc && cfuc && cfnum && cfSpec) {
    userChoices = lower.concat(upper, numbers, special);
    console.log(userChoices);
  
  } else if (cflc && cfuc && cfnum) {
    userChoices = lower.concat(upper, numbers);
    console.log(userChoices);
  
  } else if (cflc && cfuc && cfSpec) {
    userChoices = lower.concat(upper, special);
    console.log(userChoices);
  
  } else if (cflc && cfnum && cfSpec) {
    userChoices = lower.concat(numbers, special);
    console.log(userChoices);
  
  } else if (cfuc && cfnum && cfSpec) {
    userChoices = upper.concat(numbers, special);
    console.log(userChoices);
  
  } else if (cflc && cfuc) {
    userChoices = lower.concat(upper);
    console.log(userChoices);
  
  } else if (cflc && cfnum) {
    userChoices = lower.concat(numbers);
    console.log(userChoices);
  
  } else if (cflc && cfSpec) {
    userChoices = lower.concat(special);
    console.log(userChoices);
  
  } else if (cfuc && cfnum) {
    userChoices = upper.concat(numbers);
    console.log(userChoices);
  
  } else if (cfuc && cfSpec) {
    userChoices = upper.concat(special);
    console.log(userChoices);
  
  } else if (cfnum && cfSpec) {
    userChoices = numbers.concat(special);
    console.log(userChoices);
  
  } else if (cflc) {
    userChoices = lower;
    console.log(userChoices);
  
  } else if (cfuc) {
    userChoices = blankUpper.concat(upper);
    console.log(userChoices);
  
  } else if (cfnum) {
    userChoices = numbers;
    console.log(userChoices);
  
  } else if (cfSpec) {
    userChoices = special;
    console.log(userChoices);
  };


  var Blank = [];
  var combinePW;
  
  for (var i = 0; i < pswl; i++) {
    combinePW = userChoices[Math.floor(Math.random() * userChoices.length)];
    Blank.push(combinePW);
    console.log(combinePW);
  }
  
  
  var password = Blank.join("");
  console.log("Your Pasword is: " + password);
  return password;
  
}

