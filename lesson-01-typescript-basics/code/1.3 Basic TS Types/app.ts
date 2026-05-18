let greeting: string = 'Hello, TypeScript!';
console.log(greeting);


//! FUNCTIONS 

// * Standard typed function
function double(x: number): number {
//? This function parameter and the return type are explicitly typed.
//? This is how typescript helps with strict type definition.
    return x * 2;
}

// * Procedure — a function with no return value
function logMessage(message: string): void {
    //? `void` indicates this function does not return any value a.k.a a procedure (As learned in other languages).
    console.log(message);
}


//! ARROW FUNCTIONS 

// * Example where TypeScript infers the return type automatically:
// const triple = (x: number) => x * 3; //? return type `number` is inferred by TypeScript based on the function body.


// * Annotating an arrow function via a typed variable
let triple: (x: number) => number;

triple = (y: number) => y * 3;
//? The parameter name does not need to match the annotation (x vs y).
//? TypeScript only cares that the type signature is compatible.

//! TYPE INFERENCE 

let x; //? Implicitly typed as `any`

// let x = 4; //? Had we assigned a value, TypeScript would infer the type as `number`.


//! ARRAYS 

// * Typed arrays using the `Type[]` syntax
let numbers: number[] = [1, 2, 3, 4, 5];
let strings: string[] = ['Hello', 'World'];

// * An empty array can still be typed explicitly
let names: string[] = [];

// * The `never[]` type — inferred when an empty array has no type annotation
let neverArr = [];
//? TypeScript infers `never[]` here, meaning this array can never hold any elements.
//? This is used to inform the dev that the array is not correctly defined
//? Exact behaviour depends on the `tsconfig.json` settings (covered later in the chapter) for example it could also be of type any if other settings are enabled.

neverArr.push(1); //! This line will trigger a TypeScript warning showcasing the use of the never type