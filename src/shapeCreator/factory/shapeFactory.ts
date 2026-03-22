import type { ShapeProvider } from "../ports";
import type { ShapeOf } from "../domain/shape";
import type { ShapeConfig } from "../types/shapeConfig";
import type { ShapeRegistry } from "../registry/shapeRegistry";

export class ShapeFactory implements ShapeProvider {
    constructor(private readonly registry: ShapeRegistry) {};
    
    create<C extends ShapeConfig>(config: C): ShapeOf<C['type']> {
        return this.registry.get(config);
    };
};
