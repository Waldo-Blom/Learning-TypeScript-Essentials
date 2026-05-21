//! Basic types
//* Number
var x = 10;
var pi = 3.145;
//* String
var greeting = "Hello, TypeScript!";
var otherGreeting = 'Welcome to TypeScript!';
var templateLiteral = "The value of pi is approximately ".concat(pi, ".");
var emptyString = "";
//* Bool
var isConnected = true;
var isLoggedIn = false;
//*OBJ
var person = {
    name: "Alice",
    age: 30
};
//* Alt syntax for array
var numbers = [1, 2, 3, 4, 5]; //? <> is called generics, will be discussed later.
var number = [1, 2, 3, 4, 5]; //? The way in which we did it previously.
//* Arrays with different types of values a.k.a. Tuples. Think of it as a different way to stored objects
var studentTuple = ['Waldo', 22, true]; //? This is an example of a tuple in which we have FirstName, Age and whether the student is currently enrolled or not.
//! other types unique to TS
//! 'Any' is a type that is only used as a last resort and should be avoided when it can be. ONLY use when really needed.
var something = 4; //? This is a variable that can hold any type of value. 
//? It is not recommended to use this type as it defeats the purpose of using TypeScript, which is to have type safety.
something = 42;
something = "Now I'm a string!";
something = { name: "Alice", age: 30 };
//? One situation where it might be useful can be found below:
//? Lets say we are working with a database and we are not sure what data is going to be returned, we can use the 'any' type to store the data 
//? and then later on we can do some type checking to see what type of data we are working with.
//? Or when we are working with something were a function returns a function which then calls another function and that function also relies on another function.
//? The type would then be very complex and it would be easier to just use 'any' type instead of trying to figure out the exact type of the variable.
//? This however is not very common thus only use 'any' type when you are sure that it is the best option for your use case. 
var data = ["Hello", 1, true, []];
//? This is a better way to do this a.k.a making use of a union type which will be discussed later on in the course.
//* Null and undefined
//? Usually used in union types.
var nothing = undefined; //? This is a variable that can only hold the value of undefined.
var empty = null; //? This is a variable that can only hold the value of null.
//* Never type
//? This is a type that represents values that never occur. It is often used in functions that throw an error or have an infinite loop.
var neverValue; //? See 1.3 for example of how this type.
