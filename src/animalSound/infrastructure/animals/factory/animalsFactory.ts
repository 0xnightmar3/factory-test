import { Registry } from "../../../../shared/registry";
import type { Animal, AnimalCreator, AnimalType } from "../../../types";

export class AnimalFactory {
    constructor(private readonly registry: Registry<AnimalType, AnimalCreator>) {};

    create(type: AnimalType): Animal {
        const animalBuilder = this.registry.get(type);
        return animalBuilder();
    };
};
