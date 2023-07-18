// Import the encryptors functions here.
const { caesarCipher } = require('./encryptors.js');
const { symbolCipher } = require('./encryptors.js');
const { reverseCipher } = require('./encryptors.js');

const encodeMessage = (str) => {
  // Use the encryptor functions here.
  
  let strEncoded = caesarCipher(str, 10);
  strEncoded = symbolCipher(strEncoded);
  strEncoded = reverseCipher(strEncoded);
  return strEncoded
}

const decodeMessage = (str) => {
  // Use the encryptor functions here.
  return caesarCipher(symbolCipher(reverseCipher(str)), -10)
}

// User input / output.

const handleInput = (userInput) => {
  const str = userInput.toString().trim();
  let output;
  if (process.argv[2] === 'encode') {
    output = encodeMessage(str);
  } 
  if (process.argv[2] === 'decode') {
    output = decodeMessage(str);
  } 
  
  process.stdout.write(output + '\n');
  process.exit();
}

// Run the program.
process.stdout.write('Enter the message you would like to encrypt...\n> ');
process.stdin.on('data', handleInput);
