import type { Registry } from "../../../../shared/registry";
import { animalModules, type AnimalType, type AnimalCreator } from "../../../domain/animals";

export type AnimalRegistry = Registry<AnimalType, AnimalCreator>;

export const registerAnimals = (registry: AnimalRegistry) => {
    animalModules.forEach(({ type, create }) => registry.register(type, create));
};
