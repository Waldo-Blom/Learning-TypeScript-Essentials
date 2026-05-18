var greeting = 'Hello, TypeScript!';
console.log(greeting);
//! This is a function
function double(x) {
    return x * 2;
}
//! A function that does not return anything a.k.a a procedure
function logMessage(message) {
    console.log(message);
}
//! Arrow function with type annotations
//const triple = (x:number) => x * 3; // In this case, TypeScript can infer the return type based on the function body, so we don't need to explicitly annotate it. 
//let x = 4; // as we can see it is inferred as a number.
var x; // This is an example of the any type
//! If we were going to say triple is a function that takes a number and returns a number, we could annotate it like this:
var triple;
triple = function (y) { return y * 3; }; // This is still possible we dont have to make use of x it can be any parameter name as long as it is of the correct type.  
//! Example of an array with type annotations
// We add `[]` to the type to indicate that it is an array.
var numbers = [1, 2, 3, 4, 5];
var strings = ['Hello', 'World']; // This is an array of strings
var names = []; // Also possible to declare an empty array.
var neverArr = []; // This is an array of type never, which means it can never have any elements.
// This is used to indicate the dev that they made a mistake and that this array should not be used.
neverArr.push(1); // This will cause a compile-time error because neverArr is of type never, which means it cannot have any elements.
