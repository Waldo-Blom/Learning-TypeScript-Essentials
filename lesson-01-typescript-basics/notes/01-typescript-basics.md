# Lesson 1: Understand [[TypeScript]] Basics

> **Duration:** 1h 5m | **Status:** ✅ Complete

---

## Learning Objectives

- Understand the purpose and benefits of [[TypeScript]]
- Create a first [[TypeScript]] program
- Learn basic [[TypeScript]] syntax
- Get familiar with the main [[TypeScript]] types
- Configure a project with [[tsconfig.json]]
- Enforce coding style with [[TSLint]]

---

## 1.1 — [[Purpose and Benefits of [[TypeScript]]

### What is [[TypeScript]]?

It is used to add static typing to [[JavaScript]], a.k.a it is a superset of [[JavaScript]]. The advantage is that it helps catch some of the errors early in development.

---

### Why Switch to [[TypeScript]] over [[JavaScript]]?

- As mentioned previously it helps catch problems earlier in development therefore it makes programs more reliable and also more easier to maintain long term. It works a lot like Delphi in high school with defining variables and classes before hand where they have a set variable type. Whereas in [[JavaScript]] a variable can be a string and then afterwards also be used as a number.
- It makes it easier to understand the code as it has a strict type definition thereby making it a lot easier to read and understand.
- It is also a very popular language and is used widely.
- If you already know [[JavaScript]] it is pretty easy to understand, sometimes easier as it is strictly defined.
- Anything that [[JavaScript]] can be used for, [[TypeScript]] can also be used for because [[TypeScript]] compiles down to [[JavaScript]]. Browsers and [[Node.js]] never actually run [[TypeScript]] directly. So it's more of a development-time safety layer on top of [[JavaScript]] rather than a completely separate language.

---

## Downsides of [[TypeScript]]

- More verbose than [[JavaScript]] meaning that you have to plan your code very well. Unlike [[JavaScript]] you have to be a lot more intentional when defining things.
- Not all [[JavaScript]] libraries and frameworks are compatible, but most are though, some niche frameworks or libraries might not be. Popular ones like [[React]], [[Angular]] and [[Node.js]] are.

---

## 1.2 — Creating Your First [[TypeScript]] Program

Make sure that [[Node.js]] is installed:

```bash
node --version
```

Make sure that [[npm]] is up to date:

```bash
npm --version
```

Install the [[TypeScript]] CLI:

```bash
npm install -g typescript  # Install TypeScript globally on the local machine
tsc --version              # Check the current installed version
```

### Creating a New [[TypeScript]] Project

There are various ways to do this but in this course we are just doing the most simple one. Navigate to the project directory and then create [[TypeScript]] files there.

> [!important] [[TypeScript]] files use the `.ts` extension, NOT `.js`

### Code

```typescript
let message: string = 'Hello World :)'; // Declaring a variable of type string

// Important, the :string is a type annotation, it tells TypeScript that the variable type.

let number: number = 42;        // Declaring a variable of type number
let bool: boolean = true;       // Declaring a variable of type boolean

console.log(message); // Same as in JavaScript, we can use console.log to print the value of the variable to the console.
```

### Transpiling vs Compiling

To run the code we need to transpile it, not compile, as in [[TypeScript]] we first convert it to [[JavaScript]] and then the [[JavaScript]] compiles.

```bash
tsc the-name-of-the-file
```

It then creates the [[JavaScript]] version of the [[TypeScript]] file.

> [!example] File not found error
> 
> ```bash
> $ tsc my-first-ts-program.ts
> error TS6053: File 'my-first-ts-program.ts' not found.
> ```
> 
> This means the file name was spelled wrong in the command line.

> [!example] Type error
> 
> ```bash
> $ tsc my-firts-ts-program.ts
> my-firts-ts-program.ts:8:1 - error TS2322: Type 'boolean' is not assignable to type 'string'.
> ```
> 
> This is because of:
> 
> ```typescript
> let message: string = 'Hello World :)';
> message = true; //! This is not possible unlike in JS -> Will give an error
> ```

Then to actually run the code:

```bash
node app.js  # We run the JS code that was created by the TypeScript file
```

---

## 1.3 — Basic TypeScript Syntax

JavaScript is **dynamically typed**, this means that a variable can change types at runtime.

For example, this is valid in JavaScript:

```javascript
let x = 4;

x = 'Hello';

x = false;
```



TypeScript is different because it is **statically typed**.

Once a variable has a type, TypeScript expects it to remain that type.

This helps:

- Prevent bugs early
- Make code easier to maintain
---
### Variables & Type Annotations

TypeScript allows us to explicitly define the type of a variable using a **type annotation**.

```typescript
let username: string = 'Waldo';

let age: number = 20;

let isAdmin: boolean = false;
```

### Common Primitive Types

|Type|Example|
|---|---|
|`string`|`'Hello'`|
|`number`|`42`|
|`boolean`|`true` / `false`|
|`null`|`null`|
|`undefined`|`undefined`|

---
### Type Safety

Once a variable has a type, assigning a different type will cause an error.

```typescript
let score: number = 100;

score = 200; // Valid

score = 'Hello'; // Error
```

TypeScript prevents invalid assignments before the code even runs.

---
### Type Inference

TypeScript can often automatically determine the type of a variable.

```typescript
let message = 'Hello';
```

Even though no type annotation was written, TypeScript infers:

```typescript
let message: string
```

This means the following would fail:

```typescript
message = 42; // Error
```

### Implicit `any`

If a variable is declared without a value or type, TypeScript may infer the type `any`.

```typescript
let x;
```

`any` disables TypeScript’s type checking for that variable.

```typescript
x = 4;
x = 'Hello';
x = false;
```

Because `x` is `any`, all of these are allowed.

> Avoid using `any` unless absolutely necessary because it removes TypeScript safety.

---
### Functions

In JavaScript:

```javascript
function double(x){

    return x * 2;

}
```

The parameter `x` has no defined type.

In TypeScript we explicitly define:

1. Parameter types
2. Return type

```typescript
function double(x: number): number {

    return x * 2;

}
```


### Void Functions (Procedures)

A function that does not return anything.

```typescript
function logMessage(message: string): void {

    console.log(message);

}
```


### Arrow Functions

### Basic Arrow Function

```typescript
const triple = (x: number): number => {

    return x * 3;

};
```


### Type Inference with Arrow Functions

TypeScript can infer the return type automatically.

```typescript
const triple = (x: number) => x * 3;
```

TypeScript understands that this returns a `number`.


### Typing an Arrow Function Variable

You can also type the variable itself:

```typescript
let triple: (x: number) => number;

triple = (y: number) => y * 3;
```

### Explanation

```typescript
(x: number) => number
```

Means:

- Accepts a number parameter
- Returns a number

The parameter name does not matter (`x` vs `y`).
Only the types matter.

---
### Arrays

### Typed Arrays

```typescript
let numbers: number[] = [1, 2, 3];

let names: string[] = ['Alice', 'Bob'];
```

### Alternative Generic Syntax

```typescript
let numbers: Array<number> = [1, 2, 3];
```

Both styles are valid.
### Empty Arrays

Explicit typing is important for empty arrays.

```typescript
let users: string[] = [];
```

Without the type annotation:

```typescript
let users = [];
```

TypeScript may infer:

- `any[]` 
- or `never[]`

depending on your `tsconfig.json`.

---

### The `never[]` Type

```typescript
let neverArr = [];
```

Sometimes TypeScript infers this as:

```typescript
never[]
```

Meaning:

> “This array should never contain any values.”

So this becomes invalid:

```typescript
neverArr.push(1); // Error
```


---

## Why TypeScript Matters

TypeScript adds:

- Static typing
- Better tooling
- Error detection before runtime
- Safer refactoring
- Improved readability

This becomes useful in:

- Large projects
- Team environments
---

## 1.4 — Main [[TypeScript]] Types

| Type                 | Example                       | Notes                                                         |
| -------------------- | ----------------------------- | ------------------------------------------------------------- |
| `string`             | `let name: string = "Alice"`  | Text values                                                   |
| `number`             | `let age: number = 30`        | Integers and floats                                           |
| `boolean`            | `let active: boolean = true`  | true/false only                                               |
| `any`                | `let data: any = 4`           | Disables type checking, avoid where possible                  |
| `unknown`            | `let val: unknown`            | Safer alternative to `any`, must narrow type before use       |
| `void`               | `function log(): void {}`     | Used for functions that return nothing                        |
| `null` / `undefined` | `let x: null = null`          | Usually used in [[Union Types]]                               |
| `never`              | `let x: never`                | For functions that never return (e.g. throw or infinite loop) |
| Arrays               | `let nums: number[]`          | Can also use `Array<number>` syntax                           |
| Tuples               | `[string, number, boolean]`   | Fixed-length array with set types per position                |
| Enums                | `enum Direction { Up, Down }` | Named constants                                               |

```typescript
//! Basic types

//* Number
let x: number = 10;
let pi: number = 3.145;

//* String
let greeting: string = "Hello, TypeScript!";
let otherGreeting: string = 'Welcome to TypeScript!';
let templateLiteral: string = `The value of pi is approximately ${pi}.`;
let emptyString: string = "";

//* Boolean
let isConnected: boolean = true;
let isLoggedIn: boolean = false;

//* Object
let person: object = {
    name: "Alice",
    age: 30
};

//* Arrays
let numbers: Array<number> = [1, 2, 3, 4, 5]; // Generic syntax
let number: number[] = [1, 2, 3, 4, 5];        // Shorthand syntax

//* Tuples
let studentTuple: [string, number, boolean] = ['Waldo', 22, true];

//* Enums
enum Direction {
    Up = 1,
    Down,
    Left,
    Right,
}

//! Other types unique to TS

//* Any
let something: any = 4;
something = 42;
something = "Now I'm a string!";
something = { name: "Alice", age: 30 };
let data: any = ["Hello", 1, true, []];

//* Null and Undefined (usually used in union types)
let nothing: undefined = undefined;
let empty: null = null;

//* Never
let neverValue: never;
```

> [!tip] Other types worth knowing
> 
> - **`object`** —> more specific shapes are defined using [[Interfaces]] or [[Type Aliases]]
> - **[[Union Types]]** —> Will be discussed later
> - **[[Generics]]** —> reusable type placeholders like `Array<T>` (see question notes below)


---

## 1.5 — The [[tsconfig.json]] File

### What is [[tsconfig.json]] Used For?

This file is used to configure the way that [[TypeScript]] works in the current environment. There are a lot of different ways to configure [[TypeScript]] and it depends on what it is going to be used for and what your goal is. It helps to keep your code clean and manageable as it helps you keep to certain coding standards. Allows you to make slight adjustments to [[TypeScript]] itself.

What it allows you to configure:

- Options for the compiler as you convert [[TypeScript]] to [[JavaScript]]
- Specify which files are included when you compile, this is useful when our project has a lot of [[TypeScript]] files so we don't have to specify each file every single time
- What version of [[JavaScript]] the [[TypeScript]] is going to be converted to
- Running the compiler in strict mode, meaning it needs to follow very strict standards otherwise the program will not compile

### How to Create One

1. Go to the folder and create a file called `tsconfig.json`
2. Create a JSON object
3. Many options exist (see the example below)
4. Now when we want to compile the [[TypeScript]] files we can just type `tsc` in the command line and all the [[TypeScript]] files will be converted to [[JavaScript]] files

### Important Compiler Options

```jsonc
{
    "include": [
        "./src/**/*.ts" //! Tells TS to look inside the src folder and all its subfolders for .ts files
        //? Change this path based on where the ts files are located in the project
    ],
    "compileOnSave": true, //! Compiles TypeScript files automatically whenever you save in your editor
    "compilerOptions": {
        "rootDir": "./src",   //? Tells TS where your source files start from
        "outDir": "./build",  //? Tells TS where to put the compiled JS files
        "target": "ES6"       //! Specifies the version of JavaScript that TS will compile to
        //? This is important because different versions of JavaScript have different features and syntax
        //? We do this to target a specific version of JS to suit our needs for a specific use case
        //? For example, certain browsers may only support certain versions of JS
    }
}
```

> [!info] Common [[tsconfig.json]] configurations by use case
> 
> **[[React]] project:**
> 
> ```json
> {
>   "compilerOptions": {
>     "target": "ES2022",
>     "lib": ["ES2022", "DOM", "DOM.Iterable"],
>     "jsx": "react-jsx",
>     "strict": true,
>     "moduleResolution": "bundler",
>     "noEmit": true
>   }
> }
> ```
> 
> `jsx` is required for [[React]] —> tells [[TypeScript]] how to handle JSX syntax. `noEmit` means [[TypeScript]] only type-checks; the actual bundling is handled by tools like Vite or CRA.
> 
> **[[Node.js]] project:**
> 
> ```json
> {
>   "compilerOptions": {
>     "target": "ES2022",
>     "module": "CommonJS",
>     "lib": ["ES2022"],
>     "strict": true,
>     "outDir": "./build",
>     "rootDir": "./src"
>   }
> }
> ```
> 
> No DOM lib here since [[Node.js]] doesn't run in a browser.
> 
> **[[Angular]] project** (auto-generated by the [[Angular]] CLI):
> 
> ```json
> {
>   "compilerOptions": {
>     "target": "es2020",
>     "module": "esnext",
>     "strict": true,
>     "esModuleInterop": true
>   }
> }
> ```

---

## 1.6 — [[TSLint]] for Coding Style

### What is [[TSLint]] Used For?

This is used to ensure that our [[TypeScript]] code is consistent style-wise. It is similar to [[ESLint]] but for [[TypeScript]]. It is used to avoid stylistic errors.

> [!warning] Deprecation Notice [[TSLint]] has been deprecated since 2019. The modern replacement is [[ESLint]] with the `@typescript-eslint` plugin. For new projects, prefer [[ESLint]].

### Common Use Cases

- Having all your imports in alphabetical order
- Other teams like to have all the keys of objects in alphabetical order
- Making sure there are no leftover `console.log` statements from development and testing

### How to Install [[TSLint]]

```bash
npm install tslint tslint-config-airbnb --save-dev
```

- `tslint-config-airbnb` —> This is Airbnb's base [[TSLint]] config, like the actual company Airbnb. We use it here just so we have a base to work from. When working for an actual company they would normally have their own [[TSLint]] config already.
- `--save-dev` —> Important as [[TypeScript]] is only used during development and [[JavaScript]] is the actual files being used during production.

> [!important] After installing you still need to create the `tslint.json` file.

### How to Run [[TSLint]] Check

```bash
npx tslint --project .
```

#### Breaking Down the Command

- **`npx`** —> Runs a package without needing to install it globally, looking for it in `node_modules/.bin` first
- **`tslint`** —> The tool being run; a linter that analyzes your [[TypeScript]] code for errors, style issues, and bad practices without executing it
- **`--project`** —> Tells [[TSLint]] to use a [[tsconfig.json]] file to determine which files to lint
- **`.`** —> The argument for `--project`; the dot means "current directory", so it looks for a [[tsconfig.json]] in the folder you're currently in

### Example Output

> [!note] These errors are based on the Airbnb config. Every company will have different standards and rules configured differently.

```bash
$ npx tslint --project .

ERROR: .../src/another.ts:2:1 - Expected indentation of 0 spaces but found 1.
ERROR: .../src/another.ts:4:6 - Identifier 'result' is never reassigned; use 'const' instead of 'let'.
ERROR: .../src/another.ts:5:61 - file should end with a newline
ERROR: .../src/app.ts:1:3 - comment must start with a space
ERROR: .../src/app.ts:7:1 - Consecutive blank lines are forbidden
ERROR: .../src/app.ts:17:1 - Exceeds maximum line length of 100
ERROR: .../src/utils.ts:4:30 - missing whitespace
ERROR: .../src/utils.ts:5:1 - Expected indentation of 2 spaces but found 4.
```

### Common [[TSLint]] Rules and What They Do

| Rule                 | What it enforces                                                      |
| -------------------- | --------------------------------------------------------------------- |
| `no-console`         | Disallows `console.log` statements left in production code            |
| `no-unused-variable` | Flags variables that are declared but never used                      |
| `semicolon`          | Enforces consistent use or omission of semicolons                     |
| `quotemark`          | Enforces single or double quotes consistently                         |
| `indent`             | Enforces consistent indentation (e.g. 2 or 4 spaces)                  |
| `trailing-comma`     | Enforces or disallows trailing commas in arrays and objects           |
| `prefer-const`       | Flags `let` declarations that are never reassigned, should be `const` |
| `no-var`             | Disallows use of `var`, enforces `let` and `const` instead            |
| `max-line-length`    | Flags lines exceeding a max character count (commonly 100 or 120)     |
| `eofline`            | Requires files to end with a newline                                  |

---

## Key Takeaways

1. [[TypeScript]] is a superset of [[JavaScript]] that adds static typing, it compiles down to [[JavaScript]] and never runs directly in browsers or [[Node.js]]
2. Type annotations (`:string`, `:number`, etc.) are the core of [[TypeScript]], they prevent variables from being reassigned incompatible types
3. [[tsconfig.json]] is the control centre for your [[TypeScript]] project, it controls what gets compiled, where the output goes, and how strict [[TypeScript]] should be
4. [[TSLint]] (now replaced by [[ESLint]]) enforces consistent code style, the rules are fully configurable and vary per team or company

---

## Questions / Things to Revisit

> [!question] Other ways to create a [[TypeScript]] project Besides manually creating `.ts` files, common approaches include:
> 
> - **`npx tsc --init`** —> generates a `tsconfig.json` with all options commented out, the fastest way to scaffold a config
> - **`ts-node`** —> a package that runs [[TypeScript]] directly without a separate compile step (`ts-node script.ts`), great for quick scripts
> - **Framework CLIs** —> tools like the [[Angular]] CLI, Create [[React]] App, or Vite automatically set up [[TypeScript]] with sensible defaults, **the most common real-world approach**


> [!question] What are [[Generics]]? [[Generics]] are a [[TypeScript]] feature that lets you write reusable code that works with multiple types while still keeping type safety, instead of writing separate functions for `string`, `number`, etc., you write one function with a placeholder type `T`.
> 
> ```typescript
> // Without generics
> function identity(arg: string): string {
>     return arg;
> }
> 
> // With generics
> function identity<T>(arg: T): T {
>     return arg;
> }
> 
> identity<string>("hello"); // T = string
> identity<number>(42);      // T = number
> ```
> 
> In C# (PRG 282 course), the concept is the same. `List<T>`, `Dictionary<TKey, TValue>` etc. are examples of [[Generics]]

> [!question] Common [[tsconfig.json]] files for specific use cases See the callout block in section [[#1.5 — The tsconfig.json File]] above for [[React]], [[Node.js]], and [[Angular]] examples. The key difference between them is whether they include DOM types (browser projects need them, [[Node.js]] does not) and how JSX is handled.

> [!question] Common [[TSLint]] rules See the rules table in section [[#1.6 — TSLint for Coding Style]] above. The most universally enforced ones across teams are `prefer-const`, `no-console`, `no-unused-variable`, `semicolon`, and `indent`.

