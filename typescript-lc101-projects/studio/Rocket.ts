import { Payload } from "./Payload";
import { Cargo } from "./Cargo";
import { Astronaut } from "./Astronaut";

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];
    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    sumMass ( items: Payload[] ): number{
        let sum: number = 0;
        for (let item of items){
            sum += item.massKg;
        }
        return sum;
    }

    currentMassKg():number{
        let result: number = this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
        return result;
    }

    canAdd( item: Payload ): boolean {
        return (this.currentMassKg() + item.massKg) <= this.totalCapacityKg ? true : false;
    }

    addCargo(cargo: Cargo): boolean {
        if(this.canAdd(cargo)){
            this.cargoItems.push(cargo);
            return true;
        }
        return false;
    }

    addAstronaut(astronaut: Astronaut): boolean {
        if(this.canAdd(astronaut)){
            this.astronauts.push(astronaut);
            return true;
        }
        return false;
    }
}