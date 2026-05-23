//! Classes

class Human {
    private name: string; //? Just like in Delphi we can add access modifiers to our class properties and methods. 
                          //? Common practice is private but other such as public and protected are also available.
    private age: number;
    private hairColor: string;

    //? Define constructor
    //? In TS we need to define the static types in JS this would not be needed
    constructor(name: string, age: number, hairColor: string) {
        this.name = name;
        this.age = age;
        this.hairColor = hairColor;
    }

    //? Define method
    //? Difference between JS and TS is that in TS:
    //? 1. We need to define the static types like we saw in Chapter 1.3
    //? 2. We also have the option for the access modifiers (private, public, protected) 

    public getIntroduction(): string { //? The return type can be inferred but it is better practive to explicitly define it.
        return `Yes yes, I'm ${this.name}, I'm ${this.age} years old.`;
    }

    public introduceTo(name: string): string {
        return `Yes yes, ${name}. I'm ${this.name}, I'm ${this.age} years old.`;
    }

};

//* Making use of the class that we just defined
let person = new Human('Waldo', 22, 'Brown');

console.log(person.getIntroduction());
console.log(person.introduceTo('Alice'));

//? Obviously we can create more instances of the Human class should we like to do so.

//! Interfaces
//? This is used to help us define the structure of an object.
//? A way to define the shape of an object.

//? This is exactly like interfaces in PRG282 C# module that we did.

interface NamedObject {
    name: string;
    getName(): string;
}

let dog:NamedObject = {
    name: 'Cupcake',
    getName(){
        return this.name
    }
   
};

//? Interfaces can be used to enforce design patterns in TS
//? This will be discussed in a later chapter





