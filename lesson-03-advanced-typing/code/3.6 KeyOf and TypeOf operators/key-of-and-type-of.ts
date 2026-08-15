//! Type of operator in JS
let x = "I am string";
if(typeof x === "string") {
    console.log("x is a string");
}

//!In TS we take it a step further when working with type definition
let person = {
    name: "Waldo",
    age:22,
    hairColor:"brown"
}

type PersonType = typeof person; //? This will create a new type called PersonType based on the hardcoded type of the person object

let y = 5;

type TypeOfY = typeof y; //? Equal to the number type

//* Important to note that the type of operator can be used the same as in the JS example but also to create new types based on existing types. 


//! Key of operator in TS
// IT give is a union type representing the possible values that a object has as keys.

type PersonKey = keyof PersonType; //? This will create a new type called PersonKeys that is a union of the keys of the PersonType object. In this case it will be "name" | "age" | "hairColor"   

//Why it would be useful:
// Let say we want to create a function to get a value from a object

//This function wont work
// function getPropertyFromPerson(person:PersonType,key:string){
//     return person[key] // Wont work 
// }

//This will work
function getPropertyFromPerson(person:PersonType,key:PersonKey){
    return person[key];
}