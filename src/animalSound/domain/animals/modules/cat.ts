import { AnimalModule } from "../animalModule";
import { Animal } from "../types";

export class Cat implements Animal {
    speak(): string {
        return `Wiwiwiwiwiwi`;
    }
};

export const catModule: AnimalModule = {
    type: "cat",
    create: () => new Cat(),
};
