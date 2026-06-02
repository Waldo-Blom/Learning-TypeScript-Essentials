//! CONDITIONAL TYPES:
//? They allow us to add a little bit more logic into generic types in TS. 

// * Let say we wanted to create a function that either adds two number together or maybe two strings or even a string and a number.

// * For this function we should be able to know what the return type should be based on the input so instead of using the union in the return type
function combine(a:string|number,b:string|number):string|number{
 if (typeof a === 'number' && typeof b === 'number') {//? Type of will be done in 3.6 and explained a bit later
    return a +b;
 } else {
    return a as string + b as string;
 }
}

// * Now after we define the function and use it:
//? TS is not able to identify that the result is a string even though we know it will be a string. 
//? This could be a problem as we might want to use the result as a string but TS will complain
let result = combine(10, "Hello");

function reverseString(input:string){
 //? Not going to implement this is just for display to show the result cant be used as a string
}

//reverseString(result); //! Error: Argument of type 'string | number' is not assignable to parameter of type 'string'. Type 'number' is not assignable to type 'string'

// * Here is where conditional types come in:
//? Conditional Type: Only resolves to 'number' if BOTH T1 and T2 are numbers, otherwise 'string'
type StringOrNumber<T1 extends string | number,T2 extends string | number> = 
    T1 extends number ?  //? Is T1 a number?
    T2 extends number ?  //? YES → Is T2 also a number?
        number:          //? YES → number
        string:          //? NO  → string
        string;          //? NO  → string

// * Now lets rewrite the combine function to make use of the Conditional type
function combineConditional<T1 extends string | number,T2 extends string | number>(a:T1,b:T2):StringOrNumber<T1,T2>{
 if (typeof a === 'number' && typeof b === 'number') {//! Type of will be done in 3.6 and explained a bit later
    return (a +b) as StringOrNumber<T1,T2>;
 } else {
    return (a as string + b as string) as StringOrNumber<T1,T2>;
 }
}

let conditionalResult = combineConditional(10, "Hello"); //? Now when we hover it deceits that it is a string

//TODO: Keep in mind that conditional types are quite advanced TS. So it is fair that there might be some confusion
//TODO: Find another example where I can maybe implement a example myself so I can practice it and better understand it