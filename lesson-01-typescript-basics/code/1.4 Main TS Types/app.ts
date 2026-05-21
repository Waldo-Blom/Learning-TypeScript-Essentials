//! Basic types

//* Number
let x:number = 10;
let pi:number = 3.145;

//* String
let greeting:string = "Hello, TypeScript!";
let otherGreeting:string = 'Welcome to TypeScript!';
let templateLiteral:string = `The value of pi is approximately ${pi}.`;
let emptyString:string = "";

//* Bool
let isConnected:boolean = true;
let isLoggedIn:boolean = false;

//*OBJ
let person:object = { //? It is fine to do this but it is better to do the option later on such as custom types or interfaces
    name: "Alice",
    age: 30
}; 

//* Alt syntax for array
let numbers:Array<number> = [1, 2, 3, 4, 5]; //? <> is called generics, will be discussed later.
let number:number[] = [1, 2, 3, 4, 5]; //? The way in which we did it previously.

//* Arrays with different types of values a.k.a. Tuples. Think of it as a different way to stored objects
let studentTuple:[string,number,boolean] = ['Waldo', 22, true]; //? This is an example of a tuple in which we have FirstName, Age and whether the student is currently enrolled or not.

//* Enums
enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}

//! other types unique to TS

//! 'Any' is a type that is only used as a last resort and should be avoided when it can be. ONLY use when really needed.
let something:any = 4; //? This is a variable that can hold any type of value. 
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

let data:any = ["Hello",1,true,[]] ;

//? This is a better way to do this a.k.a making use of a union type which will be discussed later on in the course.


//* Null and undefined
//? Usually used in union types.

let nothing:undefined = undefined; //? This is a variable that can only hold the value of undefined.
let empty:null = null; //? This is a variable that can only hold the value of null.

//* Never type
//? This is a type that represents values that never occur. It is often used in functions that throw an error or have an infinite loop.

let neverValue:never; //? See 1.3 for example of how this type.