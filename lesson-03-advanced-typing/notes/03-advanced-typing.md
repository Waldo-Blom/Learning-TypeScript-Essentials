# Lesson 3: Advanced Typing in TypeScript


> **Duration:** 1h 3m | **Status:** 🔄 In progress


---

## Learning Objectives

  

- Generics

- Mapped types

- Conditional types

- Indexed access types

- Template literal types

- `keyof` and `typeof` operators


---

## 3.1 — Generics

### What are [[Generics]]
They are used to allow us to create and use classes and functions that work with multiple types of data but also keep the data consistent within the class or function.

BUT what does this actually mean?? 

### How to identify them

By looking at if the class, function etc. contains "<>". This implies the use of generics

```typescript

 //* The <> tells TS we make use of Generics. Important we tell it what to name it aka "T". It just stands for Type.

class GenericQueue<T> {

    private items: T[];

    constructor() {

        this.items = [];

        }

     add(newItem:T){

        this.items.push(newItem);

        }

    remove():T| undefined{

       return this.items.shift();

    }

}

// Example of a string queue using the generic class
let stringQueue = new GenericQueue<string>(); 
stringQueue.add("Hello");
console.log(`First element: ${stringQueue.remove}`);
//stringQueue.add(4); //? THis gives us and error which is what we want. If we just used any we would get no error


//? Using the same generic queue we can have another type using the same class
let numberQueue = new GenericQueue<number>();
numberQueue.add(5);
console.log(`First element: ${numberQueue.remove}`);

  
//! Using generics in functions
function print<T>(value:T):void{
    console.log(`The value is: ${value}`);
}

print("Hello");
print(5);

```


---

## 3.2 — Mapped Types

  Mapped types let you create new types by transforming the properties of an existing type, it useful for deriving variations without repeating the same similar code.


```typescript

type User = {
    id: string;
    name: string;
    email: string;
    age: number;
};

type NewUserData      = Pick<User, "name" | "email" | "age">;
type ConstantUser     = Readonly<User>;
type PartialUser      = Partial<User>;
  

```

### Built-in Mapped Types

| Utility Type | Description |
|---|---|
| `Partial<T>` | All properties optional |
| `Required<T>` | All properties required |
| `Readonly<T>` | All properties readonly |
| `Record<K, V>` | Object with keys K and values V |
| `Pick<T, K>` | Subset of properties |
| `Omit<T, K>` | All properties except K |

---

## 3.3 — Conditional Types

  
Conditional types add logic to generics, letting the return type change based on the input types — similar to a ternary operator but for types.

```typescript
type StringOrNumber<T1 extends string | number, T2 extends string | number> =
    T1 extends number ?
    T2 extends number ? number :
        string :
        string;

function combineConditional<T1 extends string | number, T2 extends string | number>
(a: T1, b: T2): StringOrNumber<T1, T2> {
    if (typeof a === 'number' && typeof b === 'number') {
        return (a + b) as StringOrNumber<T1, T2>;
    } else {
        return (a as string + b as string) as StringOrNumber<T1, T2>;
    }
}

let result = combineConditional(10, "Hello"); // string
let result2 = combineConditional(10, 20);     // number
```

| Syntax | Meaning |
|---|---|
| `T extends U ? X : Y` | If T is assignable to U, resolve to X, else Y |
| Nested conditionals | Chain multiple conditions like an if/else |
| `as Type` | Cast the return value to satisfy the conditional type |

---

# 3.4 — Indexed Access Types

## What are Indexed Access Types?

Indexed access types allow you to **look up the type of a property** within another type, rather than manually copying and hardcoding the type. This creates a single source of truth — if the property type changes, all references automatically update.

**Syntax:** `TypeName["propertyName"]`

---

## Why Use Indexed Access Types?

### The Problem

```typescript
interface Car {
    make: string,
    model: string | number,
    numberOfMiles: number,
}

let car: Car = {
    make: "Porsche",
    model: "993",
    numberOfMiles: 5000,
}

let carName: string = car.model; // Hardcoding the type
```

If you later change `model` from `string | number` to just `number`, you must also manually update `carName: number`.

### The Solution

```typescript
let carName: Car["model"] = car.model; // Type is automatically updated
```

---

## Key Takeaways

1. **Use indexed access types** to reference property types from existing types
2. **Single source of truth** — if a property type changes, all references update automatically
3. **Reduces errors** — no risk of mistyping or forgetting to update a hardcoded type
4. **Works with optional properties** — captures `undefined` in the type


---

# 3.5 — Template Literal Types

### What are Template Literal Types?

Template literal types combine **string literal types** to create all possible combinations of those strings. They work similarly to JavaScript template literals, but operate at the type level to generate new union types.

**Syntax:** `` `${Type1}${Type2}` ``

NBNB Find out what other types are also supported by literal types, is it only strings????

### Practical Example: Grid-Based Game

Consider a game like Tic-Tac-Toe where moves are made on a grid. The user can only select specific columns and rows:

```typescript
type ColumnLabel = "1" | "2" | "3";
type RowLabel = "A" | "B" | "C";
```

### Creating All Possible Combinations

Instead of manually writing out every valid move (`"A1"`, `"A2"`, `"B1"`, etc.), a template literal type generates the complete union automatically:

```typescript
type GameMove = `${RowLabel}${ColumnLabel}`;
// Resolves to: "A1" | "A2" | "A3" | "B1" | "B2" | "B3" | "C1" | "C2" | "C3"
```

```typescript
let newMove: GameMove = "A1";     // Valid
// let newMove2: GameMove = "G2"; // invalid combination
```

---

### Important: Compile-Time Only

TypeScript types exist only at **compile time** to help catch errors before the code runs. They do **not** prevent invalid user input at runtime.

```typescript
let userRowInput = "Hello!"
let userColumnInput = "World!"
```

If you assign runtime user input directly to a typed variable, TypeScript cannot enforce the constraint because the types are erased when the code compiles to JavaScript.

---

### Type Guards for Runtime Safety

To safely handle runtime values, use **type guard functions** with the `is Type` syntax. These narrow a general `string` to a specific literal type after validation.

```typescript
function isRowLabel(str: string): str is RowLabel {
    return ["A", "B", "C"].includes(str);
}

function isColumnLabel(str: string): str is ColumnLabel {
    return ["1", "2", "3"].includes(str);
}

function isGameMove(str: string): str is GameMove {
    let [row, column] = str.split(""); // Split into individual characters
    return isRowLabel(row) && isColumnLabel(column);
}
```

### Validating Before Function Calls

Only call typed functions after the input has been validated:

```typescript
function attackSquare(column: RowLabel, row: ColumnLabel) {
    console.log(`Attacking square ${column}${row}`);
}

// Validate both inputs individually
if (isRowLabel(userRowInput) && isColumnLabel(userColumnInput)) {
    attackSquare(userRowInput, userColumnInput);
}
```

### Cleaner Approach with the Combined Type

You can also validate the complete move string against the `GameMove` type directly:

```typescript
function attackSquareV2(move: GameMove) {
    console.log(`Attacking: ${move}`);
}

if (isGameMove(newMove)) {
    attackSquareV2(newMove); // Safe to call — we've validated the move
}
```

> [!note]
> Even if a user enters an invalid move at runtime, the code will not break because the `if (isGameMove(newMove))` check prevents `attackSquareV2` from being called with an invalid value.

---

## Key Takeaways

1. **Template literal types** generate unions of string combinations from other literal types using `` `${Type1}${Type2}` `` syntax.
2. They are **compile-time only** — they do not enforce constraints on runtime user input.
3. Use **type guard functions** to validate runtime strings and narrow them to specific literal types before passing them to typed functions.
4. Always guard function calls with runtime validation when dealing with external input (user data, API responses, etc.).
---

## 3.6 — `keyof` and `typeof` Operators

  

<!-- Your notes here -->

  

```typescript

  

```


---


## Key Takeaways

  

1.

2.

3.

  

---

  

## Questions / Things to Revisit

  

- Find out what other mapped types are commonly used - 3.2
- Find another example where I can maybe implement a example myself so I can practice it and better understand it - 3.3
- NBNB Find out what other types are also supported by literal types, is it only strings???? - see 3.5