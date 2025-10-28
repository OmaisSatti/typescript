/* An enum is a special "class" that represents a group of constants (unchangeable variables).
Enums come in two flavors string and numeric.
Let's start with numeric. */



// numeric By default, enums will initialize the first value to 0 and add 1 to each additional value:
enum CardinalDirections {
  North=1,
  East,
  South,
  West
}
let currentDirection = CardinalDirections.North;
console.log(currentDirection);


/* String Enums
Enums can also contain strings.
This is more common than numeric enums, because of their readability and inten */
enum Direction {
  Up='up',
  Down='down',
  Left='left',
  Right='right'
}

console.log(Direction.Down)