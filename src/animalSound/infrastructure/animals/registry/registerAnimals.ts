import { Registry } from "../../../../shared/registry";
import { Cat, type Animal, type AnimalType } from "../../../types";

export const registerAnimals = (registry: Registry<AnimalType, Animal>): void => {
    registry.register("cat", new Cat());
};
