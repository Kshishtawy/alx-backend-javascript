// This code snippet should trigger ESLint rules

// Rule: 'no-console': 'off'
console.log("This will not trigger 'no-console' rule");

// Rule: 'no-shadow': 'off'
let x = 10;
function myFunction() {
  let x = 20; // This will not trigger 'no-shadow' rule
}

// Rule: 'no-restricted-syntax': ['error', 'LabeledStatement', 'WithStatement']
// This rule disallows certain syntaxes. The following examples will trigger the rule:
const myArray = [1, 2, 3];
for (const item in myArray) {
  console.log(item); // This will trigger 'no-restricted-syntax' rule due to 'WithStatement'
}

// You can also add additional code snippets here to test other ESLint rules defined in your configuration
