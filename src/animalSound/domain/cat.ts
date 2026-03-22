import { Animal } from "../types";

export class Cat implements Animal {
    speak(): string {
        return `Wiwiwiwiwiwi`;
    }
};
