export type AnimalType = "cat";

export interface Animal {
    speak(): string;
};

export type AnimalCreator = () => Animal;
