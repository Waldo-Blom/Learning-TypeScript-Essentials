
//! LITERAL TYPES
 
//? Regular primitive types allow any value of that type
let x: number = 10;
x = 20;
x = -5;
 
//? Literal types constrain a variable to ONE specific value
let y: "Hello" = "Hello";
// y = "World"; //! This gives an error - not allowed
 
//? Combine multiple literals to create an enumerable type
let z: "Hello" | "Goodbye" | "Cheers" = "Hello";
z = "Cheers"; //? This works
// z = "Auf Wiedersehen"; //! This doesn't work - not in the literal union
 
//? //Lets look at a usefull example in action
//? Lets say we want to use TS to create a game that takes place on a grid like tic tac toe. 
//? There is going to be limited amount of options that the user can submit
type ColumnLabel = "1" | "2" | "3";
type RowLabel = "A" | "B" | "C";
 

//! TEMPLATE LITERAL TYPES
 
//* Template literal types combine string literal types to create all possible combinations
//* Syntax: `${Type1}${Type2}`
//* This creates: "A1" | "A2" | "A3" | "B1" | "B2" | "B3" | "C1" | "C2" | "C3"
type GameMove = `${RowLabel}${ColumnLabel}`;
 
let newMove: GameMove = "A1"; //? This works
// let newMove2: GameMove = "G2"; //! This doesn't work - invalid combination
 
//?NBNB: if we want to limit the user to enter 1,2,3 or A,b,c. The types are not actually going to be limiting the user to doing actually anything.
//? In other words if we were to get the user input and put it into a var of type ColumnLable or RowLable. 
//? It would not stop the user from entering anything else. Because at run time the types are no longer going to be there. Types only help at compile time. It helps us to catch errors before we run the code. 
//? So if we were to try and assign a value that is not of type ColumnLable or RowLable, TS will throw an error and not allow us to compile the code.
 
let userRowInput = "Hello!"
let userColumnInput = "World!"
 
function attackSquare(column: RowLabel, row: ColumnLabel) {
    console.log(`Attacking square ${column}${row}`);
}
 
//? Type guard functions use "is Type" to narrow the type
function isRowLabel(str: string): str is RowLabel {
    return ["A", "B", "C"].includes(str);
}
 
function isColumnLabel(str: string): str is ColumnLabel {
    return ["1", "2", "3"].includes(str);
}
 
function isGameMove(str: string): str is GameMove {
    let [row, column] = str.split(""); //* Split into individual characters
    return isRowLabel(row) && isColumnLabel(column);
}
 
//? Only call the function if the input is valid
if (isRowLabel(userRowInput) && isColumnLabel(userColumnInput)) {
    attackSquare(userRowInput, userColumnInput);
}
 
//? Better approach using GameMove type guard
function attackSquareV2(move: GameMove) {
    console.log(`Attacking: ${move}`);
}
 
if (isGameMove(newMove)) {
    attackSquareV2(newMove); //* Safe to call - we've validated the move
}
 
//* It is worth noting that if the user did not specify a valid move, if they were to enter something like "hello" into the newMove var, even if this happens at runtime 
//* when TS is not going to be checking it note that we still have this "if (isGameMove(newMove)){" that is going to be preventing the attachSqaureV2 function from being called with an invalid move. 
//* So even if the user enters an invalid move, the code will not break because we are checking if the move is valid before calling the function.