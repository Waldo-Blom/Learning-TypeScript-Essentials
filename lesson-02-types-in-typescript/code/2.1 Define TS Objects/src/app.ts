//! OBJECTS IN TYPESCRIPT

//! Literal Object Type Annotation
//* Not ideal for reuse, better to define a named type (see below).
//* Useful for quick, one-off object definitions.
let person: { name: string; age: number; hairColor: string } = {
    name: "Waldo",
    age: 22,
    hairColor: "brown"
};

person.name = "Waldo Blom";
// person.haircolor = "black"; //! Error: "haircolor" does not exist on this type. 


//! Custom Named Types
//? Preferred over literal annotations, reusable and less verbose.

type Person = {
    name: string;
    age: number;
    hairColor: string;
};

let person2: Person = {
    name: "Piet",
    age: 23,
    hairColor: "Black"
};


//! Optional Properties

//* The `?` marks a property as optional.
//* TypeScript will treat `hairColor` as `string | undefined` (a.k.a a union type).
type OptionalPerson = {
    name: string;
    age: number;
    hairColor?: string;
};

let optionalPerson1: OptionalPerson = {
    name: "John",
    age: 30
    //? hairColor is omitted, this is valid since it's optional.
};


//! Handling Optional / Possibly-Undefined Values

//? This is NOT allowed, `hairColor` could be `undefined`, which is incompatible with `string`.
// let pieterHairColor: string = optionalPerson1.hairColor;

//? Option 1: Widen the type to accept `undefined`.
let pieterHairColor: string | undefined = optionalPerson1.hairColor;

//? Option 2: Provide a fallback using the OR (`||`) operator.
//? If `hairColor` is undefined, "Brown" is used as the default.
let personHairColor: string = optionalPerson1.hairColor || "Brown";

//? Option 3: Extract the union into a reusable named type.
type HairColor = string | undefined;
let pieterHairColor2: HairColor = optionalPerson1.hairColor;