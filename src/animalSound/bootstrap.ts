import { Cat } from "./domain/cat";
import { Factory } from "../shared/factory";
import { Registry } from "../shared/registry";
import type { Animal, AnimalType } from "./types";
import { AnimalService } from "./infrastructure/animals/service/service";

export const buildAnimalService = (): AnimalService => {
    const animalRegistry = new Registry<AnimalType, Animal>();
    animalRegistry.register("cat", new Cat());
    const animalFactory = new Factory(animalRegistry);
    
    return new AnimalService(animalFactory);
};
