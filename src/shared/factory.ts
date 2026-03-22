import { Registry } from "./registry";

export class Factory<Type, Value> {
    constructor(private readonly registry: Registry<Type, Value>) {};

    create(type: Type): Value {
        const value = this.registry.get(type);
        return value;
    };
};
