"use strict";
//! OBJECTS IN TYPESCRIPT
//! Literal Object Type Annotation
//* Not ideal for reuse, better to define a named type (see below).
//* Useful for quick, one-off object definitions.
let person = {
    name: "Waldo",
    age: 22,
    hairColor: "brown"
};
person.name = "Waldo Blom";
let person2 = {
    name: "Piet",
    age: 23,
    hairColor: "Black"
};
let optionalPerson1 = {
    name: "John",
    age: 30
    //? hairColor is omitted, this is valid since it's optional.
};
//! Handling Optional / Possibly-Undefined Values
//? This is NOT allowed, `hairColor` could be `undefined`, which is incompatible with `string`.
// let pieterHairColor: string = optionalPerson1.hairColor;
//? Option 1: Widen the type to accept `undefined`.
let pieterHairColor = optionalPerson1.hairColor;
//? Option 2: Provide a fallback using the OR (`||`) operator.
//? If `hairColor` is undefined, "Brown" is used as the default.
let personHairColor = optionalPerson1.hairColor || "Brown";
let pieterHairColor2 = optionalPerson1.hairColor;
