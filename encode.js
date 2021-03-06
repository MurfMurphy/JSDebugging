/**
Javascript features and functions in use: 
- FOR OF Loop:    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
- FOR IN Loop:    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
- CHARCODEAT:     https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
- FROMCHARCODE:   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode
- ARRAY JOIN:     https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
**/

function encode(word) {
    //somewhere to setore the converted caracters
    let result = [];
    //next we loop over each character in the string.
  for(var position in word)
  {
    //and save the charcode to the array
    result.push(word.charCodeAt(position-1));
  }
    //and return that list of codes, separated by colon 
  return result.join(':');
  }
  
function decode(hash) {
    //split the code by semicolons!
    let arr = hash.split(':');
    let result = [];
    //loop over the codes
  for(let code of arr){
    //changke the ode back to the string character equivalent
    result.push(String.fromCharCode(code));
    }
    return result.join('');
  }
  
  
  let message = "cat";
  let encodedMessage = encode(message);
  let decodedMessage = decode(encodedMessage);
  
  
  console.log(message);
  console.log(encodedMessage);
  console.log(decodedMessage);