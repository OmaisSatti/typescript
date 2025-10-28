// TypeScript has a specific syntax for typing function parameters and return values.


// The type of the value returned by the function can be explicitly defined.
function getTime(): number {
    return new Date().getTime();
}
console.log(`time is: ${getTime()}`)



// The type void can be used to indicate a function doesn't return any value.
function printHello(): void {
    console.log('Hello!');
}
printHello()

// Function parameters are typed with a similar syntax as variable declarations.
function sum(a: number, b: number) {
    return a + b
}

/* By default TypeScript will assume all parameters are required,
 but they can be explicitly marked as optional. */
function add(a: number, b: number, c?: number) {
  return a + b + (c || 0);
}

// For parameters with default values, the default value goes after the type annotation:

function pow(value: number, exponent: number = 10) {
  return value ** exponent;
}

// Typing named parameters follows the same pattern as typing normal parameters.
function divide({ dividend, divisor }: { dividend: number, divisor: number }) {
  return dividend / divisor;
}

divide({dividend:10,divisor:5})