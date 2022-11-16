// First we select generate button by targeting the btn class
const generateBtn = document.getElementById("#btn");

// Then we set password parameters for each element
const length = document.getElementById('#characterNumber');
const upperCase = document.getElementById('#includeUppercase');
const numbers = document.getElementById('#includeNumbers');
const symbols = document.getElementById('#includeSymbols');

// create arrays to hold password parameters
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90);
const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122);
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57);
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(arrayFromLowToHigh(58, 64)).concat(arrayFromLowToHigh(91, 96)).concat(arrayFromLowToHigh(123, 126));

// This for prevent the page from refresh every time the submit event happens then call the function generating password
const form = document.getElementById('pwGeneratorForm')
passwordDisplay = document.getElementById('passwordDisplay')

form.addEventListener('submit', e => {
  e.preventDefault()
  const pwLength = length.value;
  const includeUpperCase = upperCase.checked;
  const includeNumbers = numbers.checked;
  const includeSymbols = symbols.checked;

  const password = generatePassword(pwLength, includeUpperCase, includeNumbers, includeSymbols);
  passwordDisplay.innerText = password
})


// Write password to the #password-display input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.getElementById("#passwordDisplay");

//   passwordText.value = password;
// }

// generate array from low to high
function arrayFromLowToHigh(low, high) {
  const array = [];
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array;
}
// logic for generating password
function generatePassword(pwLength, pwUpperCase, pwNumbers, pwSymbols) {
  let charCodes = LOWERCASE_CHAR_CODES
  if(includeUpperCase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
  if(includeSymbols) charCodes = charCodes.concat(SYMBOL_CHAR_CODES)
  if(includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES)

  const passwordCharacters = [];
  for(let i = 0; i < pwLength; i++) {
    const characterCode = charCodes[Math.floor(Math.random() * pwLength)]
    passwordCharacters.push(String.fromCharCode(characterCode))
  }
  return passwordCharacters.join("")
}
