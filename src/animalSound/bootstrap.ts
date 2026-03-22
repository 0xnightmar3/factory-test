import { Cat } from "./domain/cat";
import { Registry } from "../shared/registry";
import type { Animal, AnimalType } from "./types";
import { AnimalFactory } from "./infrastructure/animals/factory/animalFactory";
import { AnimalService } from "./infrastructure/animals/service/animalService";

export const buildAnimalService = (): AnimalService => {
    const animalRegistry = new Registry<AnimalType, Animal>();
    animalRegistry.register("cat", new Cat());
    const animalFactory = new AnimalFactory(animalRegistry);
    
    return new AnimalService(animalFactory);
};
