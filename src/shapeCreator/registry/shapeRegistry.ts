import type { ShapeBuilder } from "../ports";
import type { AnyShapeModule, ShapeOf } from "../domain/shape";
import type { ShapeConfig, ShapeType } from "../types/shapeConfig";

export class ShapeRegistry {
    private readonly registry = new Map<ShapeType, ShapeBuilder<any, any>>();

    register<M extends AnyShapeModule>(module: M): void {
        const registeredBuilder = this.registry.get(module.type);
        if (registeredBuilder) throw new Error(`Shape already registered: ${module.type}`);
        this.registry.set(module.type, module.create);
    };

    get<C extends ShapeConfig>(config: C): ShapeOf<C['type']> {
        const builder = this.registry.get(config.type);
        if (!builder) throw new Error(`Shape not registered: ${config.type}`);
        return builder(config);
    };
};
