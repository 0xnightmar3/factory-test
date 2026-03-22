import { Registry } from "../shared/registry";
import { AnimalCreator, AnimalType } from "./types";
import { AnimalService } from "./infrastructure/animals/service/service";
import { AnimalFactory } from "./infrastructure/animals/factory/animalsFactory";
import { AnimalRegistry, registerAnimals } from "./infrastructure/animals/registry/registerAnimals";

export const buildAnimalService = (): AnimalService => {
    const animalRegistry: AnimalRegistry = new Registry<AnimalType, AnimalCreator>();
    registerAnimals(animalRegistry);
    const animalFactory = new AnimalFactory(animalRegistry);

    return new AnimalService(animalFactory);
};
