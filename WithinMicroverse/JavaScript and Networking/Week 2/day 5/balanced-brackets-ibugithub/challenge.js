function balancedBrackets(string) {
  const stack = [];
  const openingBrackets = ['(', '[', '{'];
  const closingBrackets = [')', ']', '}'];
  const bracketPairs = {
    ')': '(',
    ']': '[',
    '}': '{'
  };

  for (let char of string) {
    if (openingBrackets.includes(char)) {
      stack.push(char);
    } else if (closingBrackets.includes(char)) {
      const top = stack.pop();
      if (top !== bracketPairs[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

console.log(balancedBrackets('(hello)[world]'))
// => true

console.log(balancedBrackets('([)]'))
// => false

console.log(balancedBrackets('[({}{}{})([])]'))
// => true

module.exports = balancedBrackets
