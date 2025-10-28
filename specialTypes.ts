/* TypeScript includes several special types that have specific behaviors in the type system.
These types are used in various scenarios to handle cases where the type might not be known 
in advance or when you need to work with JavaScript primitives in a type-safe way. */

/* The any type is the most flexible type in TypeScript.
It essentially tells the compiler to skip type checking for a particular variable.
While this can be useful in certain situations, it should be used sparingly as it bypasses TypeScript's type safety features.
When migrating JavaScript code to TypeScript
When working with dynamic content where the type is unknown
When you need to opt out of type checking for a specific case */
let v: any = true;
v = "string"; // no error as it can be "any" type
Math.round(v); // no error as it can be "any" type

/* The unknown type is a type-safe counterpart of any.
It's the type-safe way to say "this could be anything, so you must perform some type of checking before you use it".
Key differences between unknown and any:
unknown must be type-checked before use
You can't access properties on an unknown type without type assertion
You can't call or construct values of type unknown */
function printLength(value: unknown) {
    if (typeof value === "string") {
        console.log("String length:", value.length);
    } else if (typeof value === "number") {
        console.log("Number squared:", value * value);
    } else {
        console.log("Unknown type");
    }
}

printLength("typescript"); // String length: 10
printLength(4);            // Number squared: 16
printLength(true);         // Unknown type



/* The never type represents the type of values that never occur.
Common use cases for never:
Functions that never return (always throw an error or enter an infinite loop)
Type guards that never pass type checking
Exhaustiveness checking in discriminated unions */
function throwError(message: string): never {
    throw new Error(message);
}

throwError("Something went wrong!");
/* unknown → matlab kuch bhi ho sakta hai (pehle check karo).
never → matlab kabhi kuch ho hi nahi sakta.
 */




/* In TypeScript, both undefined and null have their own types, just like string or number.
By default, these types can be assigned to any other type, but this can be changed with TypeScript's strict null checks.
Key points about undefined and null:
undefined means a variable has been declared but not assigned a value
null is an explicit assignment that represents no value or no object
In TypeScript, both have their own types: undefined and null respectively
With strictNullChecks enabled, you must explicitly handle these types */

let x: undefined;
let y: null = null;

console.log(x == y);  // true  (loose equality: undefined == null)
console.log(x === y); // false (strict equality: types alag hain)

/* ⚡ Easy Yaad Rakhne ka Tareeqa:
undefined → system ki taraf se hota hai (default).
null → tumhari taraf se hota hai (manual). */



/* 🔹 1. Optional Parameters
TypeScript me agar tum function parameter ko optional banana chahte ho to ? use hota hai.
Matlab parameter dena bhi theek hai aur na dena bhi. Agar na diya to default undefined hoga. */
function greet(name?: string) {
  if (name) {
    console.log("Hello " + name);
  } else {
    console.log("Hello Guest");
  }
}

greet("Omais"); // Hello Omais
greet();        // Hello Guest



/* 🔹 2. Nullish Coalescing (??)
?? operator tab use hota hai jab tumhe null ya undefined ke liye default value set karni ho.
(Baqi falsy values jaise 0, "", false ko yeh ignore nahi karega.) */

let userName: string | null = null;
let finalName = userName ?? "Guest";
console.log(finalName); // Guest


/* Difference: || vs ??
👉 || har falsy value (false, 0, "", NaN, null, undefined) ko default se replace kar deta hai.
👉 ?? sirf null aur undefined ke liye replace karega. */
let a = 0;

console.log(a || 10); // 10  (kyun ke 0 falsy hai)
console.log(a ?? 10); // 0   (kyun ke 0 null/undefined nahi hai)
