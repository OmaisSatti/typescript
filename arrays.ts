/* In TypeScript, an array is a collection of values of the same
type. Unlike JavaScript, TypeScript lets you specify what type of 
values the array can hold — this helps catch errors at compile time. */
let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["Omais", "Ali", "Sara"];
// Using generic Array<type> syntax
let numbers2: Array<number> = [10, 20, 30];
let fruits: Array<string> = ["Apple", "Banana", "Mango"];
// Mixed types (using union)
let mix: (string | number)[] = [1, "Hello", 2, "World"];
// Readonly arrays (cannot be modified)
let readonlyNumbers: readonly number[] = [1, 2, 3];
// readonlyNumbers.push(4); ❌ Error
console.log(numbers)