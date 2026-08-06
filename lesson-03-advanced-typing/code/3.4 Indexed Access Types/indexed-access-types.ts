//! INDEXED ACCESS TYPES
 
interface Car {
    make: string,
    model?: string | number,
    numberOfMiles: number,
}
 
let car: Car = {
    make: "Porsche",
    model: "993",
    numberOfMiles: 5000,
}
 
//? What happens if we need to change the type of model? We would have to manually update carName too.
//! let carName: string = car.model;
 
//? Indexed access types allow us to reference the type of a property from another type
let carName: Car["model"] = car.model; //* This tells TS that carName has the same type as car.model (string | number)
 
//? We also can create custom types using indexed access
type CarModel = Car["model"];
let carName2: CarModel = car.model;
 
//? We also then combine indexed access types together
type CarMakeOrModel = Car["make"] | Car["model"]; //* Either the type of make OR the type of model
let carName3: CarMakeOrModel = car.model || car.make;
 
//* The main idea of indexed access types is to allow us to look up the type of a property inside of another type that we have created instead of just manully copy and pasting the type and hardcding the value.
 
 
 