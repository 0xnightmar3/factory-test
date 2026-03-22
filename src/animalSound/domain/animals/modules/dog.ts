import { AnimalModule } from "../animalModule";
import { Animal } from "../types";

export class Dog implements Animal {
    speak(): string {
        return `Woof Woof!!! :P`;
    };
};

export const dogModule: AnimalModule = {
    type: "dog",
    create: () => new Dog(),
};
