import type { AnimalProvider } from "./ports";
import type { AnimalType } from "../../domain/animals/types";

export class AnimalService {
    constructor(private readonly provider: AnimalProvider) {};

    makeSound(type: AnimalType): string {
        const value = this.provider.create(type);
        return value.speak();
    };
};
