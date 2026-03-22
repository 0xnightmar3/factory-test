import type { Animal, AnimalType } from "../../../types";
import type { Factory } from "../../../../shared/factory";

export class AnimalService {
    constructor(private readonly factory: Factory<AnimalType, Animal>) {};

    makeSound(type: AnimalType): string {
        const value = this.factory.create(type);
        return value.speak();
    };
};
