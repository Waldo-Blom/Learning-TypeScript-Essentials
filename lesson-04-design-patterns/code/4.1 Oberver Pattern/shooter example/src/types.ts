//https://dev.to/themuneebh/typescript-branded-types-in-depth-overview-and-use-cases-60e

type Health = number & {readonly __brand: "Health"};
type Damage = number & { readonly __brand: "Damage" };


//Health can be zero meaning a charater has died
function setHealth(value:number):Health{
    if (value >= 0 && value <= 100  && Number.isInteger(value)){
        return value as Health;
    }else{
        throw new Error("Must be a integer value between 0 -100");
    }

}

//Damage dealt is always more than one but no more than 100
function setDamage(value:number):Damage{
    if (value >= 1 && value <= 100  && Number.isInteger(value)){
        return value as Damage;
    }else{
        throw new Error("Must be a integer value between 0 -100");
    }

}

export{Health,Damage,setHealth,setDamage};

