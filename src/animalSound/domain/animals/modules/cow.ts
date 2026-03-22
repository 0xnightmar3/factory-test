import { AnimalModule } from "../animalModule";
import { Animal } from "../types";

export class Cow implements Animal {
    speak(): string {
        return `MOOOOOOOOOOOOOOOOO`;
    };
};

export const cowModule: AnimalModule = {
    type: "cow",
    create: () => new Cow(),
};
