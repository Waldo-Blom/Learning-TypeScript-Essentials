# Lesson 2: Types in TS

> **Duration:** 27m | **Status:** ✅ Complete

---
## Learning Objectives

- How to work with TS objects, classes and interfaces.
- What is type inference and how to use it

## 2.1 — Define TypeScript Objects

---
### Other way of creating TS projects
1. Check if typescript is installed : `tsc --version`
2. Then if works: `tsc --init`
3. This then creates a new [[tsconfig.json]] file

---
### Literal Object Type Annotation

Not ideal for reuse.

```typescript
let person: { name: string; age: number; hairColor: string } = {
    name: "Waldo",
    age: 22,
    hairColor: "brown"
};
```

### Custom Named Types

Preferred over literal annotations, reusable and less verbose.

```typescript
type Person = {
    name: string;
    age: number;
    hairColor: string;
};
```

### Optional Properties

The `?` marks a property as optional. TypeScript treats it as a union type, `string | undefined`.

```typescript
type OptionalPerson = {
    name: string;
    age: number;
    hairColor?: string; // valid to omit this
};
```

### Handling Optional / Possibly-Undefined Values

Since an optional property could be `undefined`, you cannot assign it directly to a `string`. There are three ways to handle this:

```typescript
// Option 1: Widen the type to accept undefined
let color: string | undefined = person.hairColor;

// Option 2: Provide a fallback with the OR operator
let color: string = person.hairColor || "Brown";

// Option 3: Extract into a reusable named union type
type HairColor = string | undefined;
let color: HairColor = person.hairColor;
```

---

## 2.2 — TS Classes and Interfaces

### Classes

Classes in TypeScript work similarly to classes in Delphi or C#. The main difference in TS compared to JavaScript is that you must define static types for all properties and parameters, and you have access to modifiers (`private`, `public`, `protected`).

Just like in PRG282:

-  **`private`** — only accessible inside the class itself.
- **`protected`** — accessible inside the class and any subclass that extends it.
- **`public`** — accessible from anywhere, used on methods you intentionally want to expose.

Best practice is to always explicitly define the return type of a method, even though TypeScript can infer it.


```typescript
class Human {
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public getIntroduction(): string {
        return `I'm ${this.name}, I'm ${this.age} years old.`;
    }

    public introduceTo(name: string): string {
        return `${name}, I'm ${this.name}, I'm ${this.age} years old.`;
    }
}

let person = new Human('Waldo', 22);
```

### Interfaces

An interface defines the _shape_ of an object a.k.a what properties and methods it must have. This is exactly the same concept as interfaces in C# from PRG282.

```typescript
interface NamedObject {
    name: string;
    getName(): string;
}

let dog: NamedObject = {
    name: 'Cupcake',
    getName() {
        return this.name;
    }
};
```

Interfaces can also be used to enforce design patterns in TypeScript, this will be covered in a later chapter.

---

## Key Takeaways

1. Use **named types** (`type Person = {...}`) over literal annotations.
2. **Classes** combine data and behaviour in one place, with access modifiers (`private`, `public`, `protected`) controlling what is accessible from outside the class.
3. **Interfaces** define the shape an object must conform to. Useful if you want multiple different objects or classes to guarantee they all have the same structure.

---

## Questions / Things to Revisit

> [!question] Find a practical example to highlight the benefits of [[Interfaces]]

> [!question] Practice Exercise: Classes and Interfaces Model a small library system using TypeScript classes and interfaces. TODO: 24 May
> 
> Generated using Claude:
> 
> - Create an interface `Borrowable` with an `isAvailable: boolean` property and a `checkOut(borrowerName: string): string` method.
> - Create a `LibraryItem` class with `private` fields for `title` and `author` that implements `Borrowable`.
> - Add a `getDetails(): string` method that returns a formatted description.
> - Create at least two instances and simulate checking one out.
> 
> |Criterion|Marks|
> |---|---|
> |Interface correctly defined with proper types|2|
> |Class uses `private` access modifiers on fields|1|
> |Class correctly `implements` the interface|2|
> |`checkOut` updates `isAvailable` and returns a meaningful string|2|
> |Constructor and `getDetails()` explicitly typed with return types|2|
> |Two instances created and methods called logically|1|
> |**Total**|**10**|