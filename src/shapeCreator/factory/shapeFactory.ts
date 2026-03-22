import type { Shape } from "../domain/shape";
import type { ShapeProvider } from "../ports";
import type { ShapeConfig } from "../types/shapeConfig";
import type { ShapeRegistry } from "../registry/shapeRegistry";

export class ShapeFactory implements ShapeProvider {
    constructor(private readonly registry: ShapeRegistry) {};
    
    create(config: ShapeConfig): Shape {
        return this.registry.get(config);
    };
};
