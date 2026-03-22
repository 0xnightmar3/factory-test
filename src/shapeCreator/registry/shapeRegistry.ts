import type { Shape } from "../domain/shape";
import type { ShapeBuilder } from "../ports";
import type { ShapeConfig, ShapeType } from "../types/shapeConfig";

export class ShapeRegistry {
    private readonly registry = new Map<ShapeType, ShapeBuilder>();

    register(type: ShapeType, builder: ShapeBuilder): void {
        const registeredBuilder = this.registry.get(type);
        if (registeredBuilder) throw new Error(`Shape already registered: ${type}`);
        this.registry.set(type, builder);
    };

    get(config: ShapeConfig): Shape {
        const builder = this.registry.get(config.type);
        if (!builder) throw new Error(`Shape not registered: ${config.type}`);
        return builder(config);
    };
};
