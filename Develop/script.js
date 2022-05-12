// Assignment code here


var pswl; // Password length 8 to 128 characters
var cflc; // confirm lower case
var cfuc; // confirm upper case
var cfnum; // confirm number
var cfSpec; // confirm special characters
var userChoices

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

function generatePassword() {
  pswl = prompt('Your password must have at least one lower case, one upper case, one number, and one special character!');
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

  // if (!cflc && !cfuc && !cfnum && !cfSpec) {
  //   userChoices = alert('Please choose your password accoring to the criteria!');

  



}