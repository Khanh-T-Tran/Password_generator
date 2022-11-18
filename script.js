// First we select generate button by targeting the btn class
const generateBtn = document.getElementById("btn");

// Then we set password parameters for each element
const characterRange = document.getElementById('characterRange');
const characterNumber = document.getElementById('characterNumber');
const upperCase = document.getElementById('includeUppercase');
const numbers = document.getElementById('includeNumbers');
const symbols = document.getElementById('includeSymbols');

// create arrays to hold password parameters based on ASCii table: https://www.ascii-code.com/
const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90);
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122);
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57);
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(arrayFromLowToHigh(58, 64)).concat(arrayFromLowToHigh(91, 96)).concat(arrayFromLowToHigh(123, 126));

// this part sync Range and Number of password input
characterNumber.addEventListener('input', syncCharacterLength)
characterRange.addEventListener('input', syncCharacterLength)

function syncCharacterLength(e) {
  const value = e.target.value
  characterNumber.value = value
  characterNumber.value = value
}

// generate array from low to high
function arrayFromLowToHigh(low, high) {
  const array = [];
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array;
}

// This for prevent the page from refresh every time the submit event happens then call the function generating password
const form = document.getElementById('pwGeneratorForm')
passwordDisplay = document.getElementById('passwordDisplay')
form.addEventListener('submit', e => {
  e.preventDefault()
  const pwLength = characterNumber.value;
  const includeUpperCase = upperCase.checked;
  const includeNumbers = numbers.checked;
  const includeSymbols = symbols.checked;

  const password = generatePassword(pwLength, includeUpperCase, includeNumbers, includeSymbols);
  passwordDisplay.innerText = password
})

// logic for generating password
function generatePassword(pwLength, includeUpperCase, includeNumbers, includeSymbols) {
  let charCodes = LOWERCASE_CHAR_CODES
  if (includeUpperCase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
  if (includeSymbols) charCodes = charCodes.concat(SYMBOL_CHAR_CODES)
  if (includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES)

  const passwordCharacters = [];
  for (let i = 0; i < pwLength; i++) {
    const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
    passwordCharacters.push(String.fromCharCode(characterCode))
  }
  return passwordCharacters.join("")
}

