import { Registry } from "../../../../shared/registry";
import type { Animal, AnimalType } from "../../../types";

export class AnimalFactory {
    constructor(private readonly registry: Registry<AnimalType, Animal>) {};

    create(type: AnimalType): Animal {
        const animal = this.registry.get(type);
        return animal;
    };
};
