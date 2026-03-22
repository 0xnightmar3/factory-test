import { AnimalProvider } from "../service";
import { Registry } from "../../../../shared/registry";
import type { Animal, AnimalFactoryFn, AnimalType } from "../../../types";

export class AnimalFactory implements AnimalProvider {
    constructor(private readonly registry: Registry<AnimalType, AnimalFactoryFn>) {};

    create(type: AnimalType): Animal {
        const animalBuilder = this.registry.get(type);
        return animalBuilder();
    };
};
