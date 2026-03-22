import { Registry } from "./registry";

export type ValueCreator = <V>() => V;

export class Factory<Type, ValueCreator extends <V>() => V> {
    constructor(private readonly registry: Registry<Type, ValueCreator>) {};

    create(type: Type): ReturnType<ValueCreator> {
        const value = this.registry.get(type);
        return value();
    };
};
