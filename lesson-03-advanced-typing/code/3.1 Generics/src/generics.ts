//! Lets create a simple data structure like a queue

class Queue {
    //? The data in the queue will not be a consistent datatype. This defeats the purpose of TS
    //* private items: any[]; 

    private items: string[];

    constructor() {
        this.items = [];
        }

     add(newItem:string){
        this.items.push(newItem);
        }

    remove():string | undefined{
       return this.items.shift();
    }

}

//? If we now want a number queue we have to make another class and make changes. This is not sustainable and ineffective.
class NumberQueue {
    private items: number[]; //? The data in the queue will not be a consistent datatype. This defeats the purpose of TS

    constructor() {
        this.items = [];
        }

     add(newItem:number){
        this.items.push(newItem);
        }

    remove(): number | undefined{
       return this.items.shift();
    }

}

//! Thus we make use of Generics like this;
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

let stringQueue = new GenericQueue<string>(); // Example of a string queue using the generic class
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
