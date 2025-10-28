/* There are times when working with types where it's necessary to override the type of a variable, such as when incorrect
 types are provided by a library.
Casting is the process of overriding a type. */

/* Casting with as
A straightforward way to cast a variable is
using the as keyword, which will directly change the type of the given variable. */
let v: unknown = 'hello';
console.log((v as string).length);






// Casting doesn't actually change the type of the data within the variable, for example the following code will not work
//  as expected since the variable x still holds a number.
let y: unknown = 4;
console.log((y as string).length); // prints undefined since numbers don't have a length




// Force casting
// To override type errors that TypeScript may throw when casting, first cast to unknown, then to the target type.
let x = 'hello';
// console.log(((x as unknown) as number).length); // x is not actually a number so this will return undefined