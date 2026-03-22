import type { Animal, AnimalType } from "../../types";

export interface AnimalProvider {
    create(type: AnimalType): Animal;
};
