import type { Animal, AnimalType } from "./types";

export type AnimalFactoryFn= () => Animal;

export interface AnimalModule {
    type: AnimalType;
    create: AnimalFactoryFn;
};
