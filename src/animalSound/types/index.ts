export type AnimalType = "dog" | "cat" | "cow";

export interface Animal {
    speak(): string;
};

export class Cat implements Animal {
    speak(): string {
        return `Wiwiwiwiwiwi`;
    };
};
