//! Define the interface 
interface Borrowable {
    isAvailable: boolean;
    checkOut(borrowerName: string): string;
}

//! Define the class and implement the interface
class LibraryItem implements Borrowable {
    private title: string;
    private author: string;
    private checkedOutBy: string | null = null; //? The starting value is always null

    //? isAvailable is now a getter property
    get isAvailable(): boolean {
        return this.checkedOutBy === null; //? Just like in JS "===" means strictly equal to null
    }

    constructor(title: string, author: string) {
        this.title = title;
        this.author = author;
    }

    checkOut(borrowerName: string): string {
        this.checkedOutBy = borrowerName;
        return `"${this.title}" has been successfully checked out by ${borrowerName}.`;
    }

    getDetails(): string {
        if (this.isAvailable) {
            return `"${this.title}" by ${this.author} is currently available for checkout.`;
        } else {
            return `"${this.title}" by ${this.author} is NOT available as it is currently checked out by ${this.checkedOutBy}.`;
        }
    }
}

//? Create two example instances
let item1 = new LibraryItem("IT", "Stephen King");
let item2 = new LibraryItem("Children Of Time", "Adrian Tchaikovsky");

//? Availability before checkout
console.log(item1.getDetails());
console.log(item2.getDetails());

//? Check out item1
console.log(item1.checkOut("Waldo Blom"));

//? After checkout of item1
console.log(item1.getDetails());
console.log(item2.getDetails());