import type { Registry } from "../../../../shared/registry";
import { animalModules, type AnimalType, type AnimalFactoryFn } from "../../../domain/animals";

export type AnimalRegistry = Registry<AnimalType, AnimalFactoryFn>;

export const registerAnimals = (registry: AnimalRegistry) => {
    animalModules.forEach(({ type, create }) => registry.register(type, create));
};
