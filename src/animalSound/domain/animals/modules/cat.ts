import { Animal } from "../types";
import { AnimalModule } from "../animalModule";

export class Cat implements Animal {
    speak(): string {
        return `Wiwiwiwiwiwi`;
    }
};

export const catModule: AnimalModule = {
    type: "cat",
    create: () => new Cat(),
};
