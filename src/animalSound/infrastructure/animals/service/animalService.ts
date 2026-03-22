import { AnimalType } from "../../../types";
import { AnimalFactory } from "../factory/animalFactory";

export class AnimalService {
    constructor(private readonly animaLFactory: AnimalFactory) {};

    makeSound(type: AnimalType): string {
        const animal = this.animaLFactory.create(type);
        return animal.speak();
    };
};
