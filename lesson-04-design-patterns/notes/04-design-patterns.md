# Lesson 4: TypeScript Design patterns

> **Duration:** 1h 3m | **Status:** In progress

---

## Learning Objectives
In this section we will be looking at popular OOP design patterns within TS and how TS can help us better implement this when compared to JS.

We will look at the following 3 using practical examples that can later be used to revise if needed:

- 4.1 Observer pattern
- 4.2 Strategy pattern 
- 4.3 Command pattern

There are a lot more but this is the most commonly used.


## 4.1 The Observer Pattern

[Observer pattern - Wikipedia](https://en.wikipedia.org/wiki/Observer_pattern)
### When to apply this pattern 
Whenever there is something in the program that a lot of parts of the program watch a certain part of the program and needs to know when that specific part of the program updates. 

Something like keeping track of a connection to the internet for a project.

### What is the Observer Pattern?

The Observer Pattern is a **design pattern** that defines a **one-to-many relationship** between objects. When one object (the Subject) changes its state, all its dependents (Observers) are notified and updated automatically.

### Real-World Example

A weather station (Subject) collects temperature data. Multiple display screens (Observers) automatically update whenever the temperature changes. Instead of each screen constantly asking "Did the temp change?", the weather station just tells all screens "Temperature changed to 72°F!"

---

## Key Components

### 1. **Observer Interface**

- Defines what all observers must have in common
- Contains an `update()` method that observers implement

```typescript
interface Observer<T> {
    update(value: T): void;
}
```

---

### 2. **Subject Class**

- Responsible for notifying all observers when state changes
- Maintains a **list of observers** stored in an array
- Has methods to:
    - **Add observers** (subscribe/register them)
    - **Notify observers** (push updates to them)

```typescript
class Subject {
    private observers: Observer<string>[] = [];  
    private value: string = '';  //The state               
    
    // Register an observer
    public addObserver(observer: Observer<string>) {
        this.observers.push(observer);
    }
    
    // Notify all observers when state changes
    public setValue(newValue: string) {
        this.value = newValue;
        this.observers.forEach(observer => {
            observer.update(newValue);  // Push notification to each observer
        });
    }
}
```

**Important:** When `setValue()` is called, ALL observers are notified automatically through their `update()` method.

---
### 3. **Example implementation of the Observer interface**

- Implements the Observer interface
- Defines what action to take when notified
- Each observer can react differently to the same event

```typescript
class LogObserver implements Observer<string> {
    update(value: string): void {
        console.log(`Updated! the new value is: ${value}`);
    }
}
```

---

## How It Works
```typescript
// Step 1: Create Subject - Instantiate the thing being observed
let subject = new Subject();

// Step 2: Create Observers - Create multiple independent observer instances
let observer1 = new LogObserver();
let observer2 = new LogObserver();
let observer3 = new LogObserver();

// Step 3: Register Observers - Tell Subject which observers to notify
subject.addObserver(observer1);
subject.addObserver(observer2);
subject.addObserver(observer3);

// Step 4: Change State - When Subject state changes, all observers are notified
// When setValue() is called, the Subject's forEach loop automatically calls update() on ALL observers
// All 3 observers' update() methods called automatically with the new value
subject.setValue("Design patterns!");

// Console Output:
// Updated! the new value is: Design patterns!
// Updated! the new value is: Design patterns!
// Updated! the new value is: Design patterns!
// ^^ All three observers reacted to the single state change
```

## Questions / Things to Revisit
- Do the example of a game to practice the observer pattern