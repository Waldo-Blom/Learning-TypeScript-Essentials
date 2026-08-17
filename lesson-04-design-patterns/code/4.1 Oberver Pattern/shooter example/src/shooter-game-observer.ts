//!A character can either take damage or they can heal
type GameEvent =  { type: "TOOK DAMAGE"; damage: number; newHealth: number } | { type: "HEALED"; healAmount: number; newHealth:  number};

//Health can be zero meaning a charater has died
function isValidHealth(value:number):boolean{
    if (value >= 0 && value <= 100  && Number.isInteger(value)){
        return true;
    }else{
        return false;
    }
}

//Damage dealt is always more than one but no more than 100
function isValidDamage(value:number):boolean{
    if (value >= 1 && value <= 100  && Number.isInteger(value)){
        return true;
    }else{
        return false;
    }
}

interface Observer{
    update(event:GameEvent):void;
}

class FPS_Character{
    private name:string;
    private health:number;
    private observers: Observer[]=[];

    constructor(name:string,intialHealth:number){
        this.name = name;
        this.health = intialHealth;
    }

    public addObserver(observer: Observer):void{
        this.observers.push(observer)
    } 

    private notifyObervers(event:GameEvent):void{
        console.log(`\n ${this.name} ${event.type}`);
        
        this.observers.forEach(observer => {
            observer.update(event);
        });
    }

    public takeDamage(damage:number):void{
        if (isValidDamage(damage)){
            let newHealth = Math.max(0,this.health - damage); 
            this.health = newHealth;

            //We then notify the observers that the user took damage
            this.notifyObervers({
                type:"TOOK DAMAGE",
                damage:damage,
                newHealth:newHealth
            });
            if (this.health == 0){
                console.log(`${this.name} died! What a bot, get good kid ;)`);
            }
        }else{
            throw new Error("Invalid damage value, range must be between 1 -100.")
        }
      
        

    }

    public heal(healAmount:number):void{
        if (isValidHealth(healAmount)){
            let newHealth = Math.min(100,this.health + healAmount);
            this.health = newHealth;

            this.notifyObervers({
                type: "HEALED", 
                healAmount: healAmount,
                newHealth: newHealth
            });

        }else{
            throw new Error("Ivalid heath value,range must be between 0 - 100")
        }

    }


    public getHealth(): number {
        return this.health;
    }
 
    public getName(): string {
        return this.name;
    }

}

//! Observer 1: The Health Bar
class UIHealthBar implements Observer {
    update(event: GameEvent): void {
        if (event.type === "TOOK DAMAGE") {
            console.log(`Health bar updated: ${this.getBarVisual(event.newHealth)}`);
        } else if (event.type === "HEALED") {
            console.log(`Health bar updated: ${this.getBarVisual(event.newHealth)}`);
        }
    }
 
    private getBarVisual(health: number): string {
        const filledBlocks = Math.floor(health / 10);
        const emptyBlocks = 10 - filledBlocks;
        return `[${"█".repeat(filledBlocks)}${"░".repeat(emptyBlocks)}] ${health}/100`;
    }
}
 
//! Observer 2
class SoundEffectSystem implements Observer {
    update(event: GameEvent): void {
        if (event.type === "TOOK DAMAGE") {
            console.log(`Playing damage sound`);
        } else if (event.type === "HEALED") {
            console.log(`Playing heal sound`);
        }
    }
}
 

//!The code in action 
console.log("GAME EVENT SYSTEM - OBSERVER PATTERN DEMO");

//? Create a game character
const hero = new FPS_Character("Richthofen", 100);
 
//? Create the observers
const healthBar = new UIHealthBar();
const soundEffects = new SoundEffectSystem();
 
//? Subscribe observers to the character
console.log("--- Subscribing Observers ---");
console.log("Added health bar observer");
hero.addObserver(healthBar);
console.log("Added sound effect observer");
hero.addObserver(soundEffects);
 
//? Trigger events
console.log("\n--- Character Events ---");
 
//! This will give a run time error, which is what we want, 
//! it is not needed to over-engineer a solution to create a custom type to aviod a runtime issue at compile time 
// ! (which is what I was tryign to do orginally)
//hero.takeDamage(1000); 
 
//? Event 2: Getting healed
hero.heal(15); // When hovering over it gives us that the expected value is of type number which is good enough, we check valid range at run time not compile time
//hero.heal("Heal 15hp")//This will not work as it needs to be number

//? Event 3: Taking more damage
hero.takeDamage(60);
 
//? Event 4: Healing again
hero.takeDamage(90);
 
//? Summary
console.log("\n═══════════════════════════════════════════════════════════");
console.log("FINAL STATE:");
console.log(`Character: ${hero.getName()}`);
console.log(`Health: ${hero.getHealth()}/100`);
console.log("═══════════════════════════════════════════════════════════");