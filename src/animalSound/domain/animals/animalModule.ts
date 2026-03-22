import type { Animal, AnimalType } from "./types";

export type AnimalCreator = () => Animal;

export interface AnimalModule {
    type: AnimalType;
    create: AnimalCreator;
};
