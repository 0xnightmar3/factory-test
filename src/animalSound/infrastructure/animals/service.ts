import type { Animal, AnimalType } from "../../domain/animals/types";

export interface AnimalProvider {
    create(type: AnimalType): Animal;
};

export class AnimalService {
    constructor(private readonly provider: AnimalProvider) {};

    makeSound(type: AnimalType): string {
        const value = this.provider.create(type);
        return value.speak();
    };
};
