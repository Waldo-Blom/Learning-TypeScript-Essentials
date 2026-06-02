

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

## 3.4 — Indexed Access Types

  

<!-- Your notes here -->

  

```typescript

  

```

  

---

## 3.5 — Template Literal Types

  

<!-- Your notes here -->

  

```typescript

  

```

  

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