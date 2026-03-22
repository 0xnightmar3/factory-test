import type { AnimalFactory } from "../factory/animalsFactory";
import type { AnimalType } from "../../../domain/animals/types";

export class AnimalService {
    constructor(private readonly factory: AnimalFactory) {};

    makeSound(type: AnimalType): string {
        const value = this.factory.create(type);
        return value.speak();
    };
};
