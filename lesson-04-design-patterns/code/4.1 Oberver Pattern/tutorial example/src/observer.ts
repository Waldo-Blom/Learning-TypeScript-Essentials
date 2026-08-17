//! The Observer Pattern 

//? It is a design pattern that defines a one-to-many relationship between objects. When one object (the Subject) changes its state, 
//? all its dependents (Observers) are notified and updated automatically

//* Real-world example: 
//* A weather station (Subject) collects temperature data. 
//* Multiple display screens (Observers) automatically update whenever the temperature changes. 
//* Instead of each screen constantly asking "Did the temp change?", the weather station just tells all screens "Temperature changed to 72°F!"

//! We will first start with creating an interface for the observer
//? This will be used to define what all observers have in common - they must have an update method to receive notifications

//? We are creating a generic interface that can take in whichever parameter is necessary
interface Observer<T>{
    //! All observers will have the update method. This gets called when the Subject changes and needs to notify observers
    //* The value parameter is what changed in the Subject
    update(value:T):void;
}

//! Lets create a Subject a.k.a the thing that the observers are observing
//? The Subject is the "source of truth" - it holds the state and is responsible for notifying all observers when that state changes
//? In real-world terms: the weather station, the news agency, the store inventory, etc.

class Subject{
    //? We keep track of all the different observers by storing them in an array
    //* It does not necessarily need to always be a string, it can be a custom type as well. But to keep it simple we use string in this example
    private observers: Observer<string>[] = [];

    //? The value that can change
    //* This is the state that the Subject manages. When this changes, all observers must be notified
    private value:string = '';

    //! Next we need a method that would allow us to add another observer to the Subject
    //? Another name for this that is also commonly used is subscribe()
    //* This method registers an observer so it will be notified of future changes
    public addObserver(observer: Observer<string>){
        this.observers.push(observer)
    } 

    //! Method for changing the value
    //? NBNB when we change the value we notify all observers
    //* This method (1) updates the state and then (2) notifies all registered observers by calling their update() method
    public setValue(newValue:string){

        this.value = newValue;

        //! Very important now we need to inform all the observers that the value has now changed using the update method
        //* We loop through every single observer and call their update method, passing the new value
        this.observers.forEach(observer => {
            observer.update(newValue)
        });
    }
}

//! Lets create another class that implements this observer interface
//? This is going to log all the changes that the observer observes
class LogObserver implements Observer<string>{
    update(value:string):void{
        console.log(`Updated! the new value is: ${value}`)
    }

}

//! Lets test this out

//? We create three separate observer instances
let observer1 = new LogObserver();
let observer2 = new LogObserver();
let observer3 = new LogObserver();

//! We create the Subject - this is the thing being observed
//* All the observers will be watching this Subject for changes
let subject = new Subject();

//! Now we register each observer with the Subject
//* Each call to addObserver adds that observer to the internal array
subject.addObserver(observer1);
subject.addObserver(observer2);
subject.addObserver(observer3);

//! Now when we set a new value on the Subject, all observers will be notified automatically
//? The setValue method will call update() on all three observers with the new value
subject.setValue("Design patterns!");

//TODO: Implement an actual example to test if I know this, practice it using this example:
// 2. Game Event System
// A game character (Subject) experiences events like taking damage, leveling up, or acquiring items. 
// Multiple game systems need to respond: 
// a UI health bar (Observer) that updates, 
// a sound effect system (Observer) that plays appropriate sounds, 
// n achievement tracker (Observer) that checks if achievements were earned, 
// and a particle effect system (Observer) that shows visual effects.