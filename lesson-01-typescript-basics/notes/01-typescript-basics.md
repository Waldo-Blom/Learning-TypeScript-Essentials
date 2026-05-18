# Lesson 1: Understand TypeScript Basics


> **Duration:** 1h 5m | **Status:** 🔄 In progress

-> These are the prelim notes as of now and they will be improved and made more professional and readable
---

## Learning Objectives


- Understand the purpose and benefits of TypeScript

- Create a first TypeScript program

- Learn basic TypeScript syntax

- Get familiar with the main TypeScript types

- Configure a project with `tsconfig.json`

- Enforce coding style with TSLint -> Very useful


---

## 1.1 — Purpose and Benefits of TypeScript

### What is TypeScript?

It is used to add static typing to JavaScript, a.k.a it is a superset of JavaScript. The advantage is that it helps catch some of the errors early in development.

---

### Why Switch to TypeScript over JavaScript?

- As mentioned previously it helps catch problems earlier in development therefore it makes programs more reliable and also more easier to maintain long term. It works a lot like Delphi in high school with defining variables and classes before hand where they have a set variable type. Whereas in JavaScript a variable can be a string and then afterwards also be used as a number.
- It makes it easier to understand the code as it has a strict type definition thereby making it a lot easier to read and understand.
- It is also a very popular language and is used widely.
- If you already know JavaScript it is pretty easy to understand, sometimes easier as it is strictly defined.
- Anything that JavaScript can be used for, TypeScript can also be used for because TypeScript compiles down to JavaScript — browsers and Node.js never actually run TypeScript directly. So it's more of a development-time safety layer on top of JS rather than a completely separate language.

---

## Downsides of TypeScript

- More verbose than JavaScript meaning that you have to plan your code very good. Unlike JavaScript you have to be a lot more intentional when defining things.
- Not all JS libraries and frameworks are compatible, but most are tho, some niche frameworks or libraries might not be. Popular ones like React, Angular and Node.js are.

## 1.2 — Creating Your First TypeScript Program

Make sure that node is installed:
  `node --version` in the terminal.

Make sure that npm in up to date:
  `npm --version`

Install the typescript CLI:
- npm install -g typescript -> Install typescipt globally on the local machine
- To check the current installed version `tsc --version`

Creating a new typescript project:
- There are various ways to do this but in this course we are just doing the most simple one. Navigate to the project directory and then create TypeScript files there.

- Important for typescipt the files are `.ts` and NOT `.js`

### Code

```typescript

let message: string = 'Hello World :)'; // Declaring a variable of type string

// Important, the :string is a type annotation, it tells TypeScript that the variable type.

  

let number: number = 42; // Declaring a variable of type number

let bool:boolean = true; // Declaring a variable of type boolean

  

console.log(message); // Same as in JavaScript, we can use console.log to print the value of the variable to the console.
```

Then to run the code we need to transpile it not compile as in TS we first covert it to JS and then the JS compiles. 

How to transpile:
- Run `tsc the-name-of-the-file`
- It then creates the JS version of the TS file
- This means that the file name was spelled wrong in the command line
```
$ tsc my-first-ts-program.ts
error TS6053: File 'my-first-ts-program.ts' not found.
  The file is in the program because:
    Root file specified for compilation


Found 1 error.
```

- This means that there is an error:
```
$ tsc my-firts-ts-program.ts
my-firts-ts-program.ts:8:1 - error TS2322: Type 'boolean' is not assignable to type 'string'.

8 message = true; //! This is not possible unlike in JS -> Will give an error
  ~~~~~~~


Found 1 error in my-firts-ts-program.ts:8
```
This is because of line 8:

```typescript
let message: string = 'Hello World :)'; // Declaring a 

message = true; //! This is not possible unlike in JS -> Will give an error
```

![[Pasted image 20260518130150.png]]

Then to actually run the code:
- node app.js -> we run the js code that was "created" but the TypeScript file.

---

  

## 1.3 — Basic TypeScript Syntax

In JS the following is possible:

```javascript
let x = 4;

x = 'Hello';

x = false;


```

That is not possible in TS as TS the variables have a strict type.
  

### Variables & Type Annotations

```typescript

  

```

  

### Functions

```javascript

  function double(x){

    return x * 2;

}

```

However in TypeScript we also have to give the type in the function declaration:

```typescript
function double(x:number):number{

    return x * 2;

}
```

---

  

## 1.4 — Main TypeScript Types

  

<!-- Your notes here -->

  

| Type | Example | Notes |

|------|---------|-------|

| `string` | | |

| `number` | | |

| `boolean` | | |

| `any` | | |

| `unknown` | | |

| `void` | | |

| `null` / `undefined` | | |

| `never` | | |

| Arrays | | |

| Tuples | | |

| Enums | | |

  

---

  

## 1.5 — The `tsconfig.json` File

  

<!-- Your notes here -->

  

### Important Compiler Options

```json

{

  "compilerOptions": {

  

  }

}

```

  

---

  

## 1.6 — TSLint for Coding Style

  

<!-- Your notes here -->

  

---

  

## ✅ Key Takeaways

  

1.

2.

3.

  

---

  

## ❓ Questions / Things to Revisit

  

- In 1.2 it is mentioned that there are other ways of creating TS projects what are the other ways and are they easier or maybe better or faster??
- 1.3 Are there any other types that I might not know about or are used often that are not mentioned in this chapter? Likely in chapter 1.4 a lot more will be mentioned but check if there are any missing from 1.4