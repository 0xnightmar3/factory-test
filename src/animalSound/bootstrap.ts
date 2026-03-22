import { Registry } from "../shared/registry";
import { AnimalFactory } from "./infrastructure/animals/factory/animalFactory";
import { registerAnimals } from "./infrastructure/animals/registry/registerAnimals";
import { AnimalService } from "./infrastructure/animals/service/animalService";
import { Animal, AnimalType } from "./types";

export const buildAnimalService = (): AnimalService => {
    const animalRegistry = new Registry<AnimalType, Animal>();
    registerAnimals(animalRegistry);
    const animalFactory = new AnimalFactory(animalRegistry);
    
    return new AnimalService(animalFactory);
};
