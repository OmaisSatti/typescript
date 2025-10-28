// boolean Represents true/false values.
let isActive: boolean = true;
// number Represents both integers and floating-point numbers.
let decimal: number = 6;
// string Represents text data.
// Can use single quotes ('), double quotes ("), or backticks (`) for template literals.
let color: string = "blue";


/* bigint (ES2020+)
Represents whole numbers larger than 253 - 1.
Use the n suffix to create a bigint. */
const bigNumber: bigint = 9007199254740991n;
const hugeNumber = BigInt(9007199254740991); // Alternative syntax


/* symbol Creates unique identifiers.
Useful for creating unique property keys and constants. */
const uniqueKey: symbol = Symbol('description');
const obj = {
  [uniqueKey]: 'This is a unique property'
};
console.log(obj[uniqueKey]); // "This is a unique property"
