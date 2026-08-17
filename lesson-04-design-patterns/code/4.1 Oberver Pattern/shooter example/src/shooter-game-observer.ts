import { setDamage,setHealth,Damage,Health } from './types';

//!A character can either take damage or they can heal
type GameEvent =  { type: "TOOK DAMAGE"; damage: Damage; newHealth: Health } | { type: "HEALED"; healAmount: Health; newHealth: Health };


interface Observer{
    update(event:GameEvent):void;
}

class FPS_Character{
    private name:string;
    private health:Health;
    private observers: Observer[]=[];

    constructor(name:string,intialHealth:Health){
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
        let validDamage = setDamage(damage);
        let newHealth = setHealth(Math.max(0,this.health - validDamage)); 
        this.health = newHealth;

        //We then notify the observers that the user took damage
        this.notifyObervers({
            type:"TOOK DAMAGE",
            damage:validDamage,
            newHealth:newHealth
        });

        if (this.health == 0){
            console.log(`${this.name} died! What a bot, get good kid ;)`);
        }

    }

    public heal(healAmount:number):void{
        let validHeal = setHealth(healAmount);
        let newHealth = setHealth(Math.min(100,this.health + validHeal));
        this.health = newHealth;

        this.notifyObervers({
            type: "HEALED", 
            healAmount: validHeal,
            newHealth: newHealth
        });
    }


    public getHealth(): Health {
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
 
    private getBarVisual(health: Health): string {
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
const hero = new FPS_Character("Richthofen", setHealth(100));
 
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
 
//? Event 1: Taking damage
//hero.takeDamage(1000); -> //! This will fail at run time but not compile time, however this defeats the purpuse of TS???
 
//? Event 2: Getting healed
hero.heal(15);
 
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