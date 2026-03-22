import type { ShapeConfig, ShapeType } from "../types/shapeConfig";

export type AnyShapeModule = ShapeModule<any, any>;
export type ShapeOf<T extends ShapeType> = Shape & { type: T };

export interface Shape {
    readonly type: ShapeType;
    area(): number;
    perimeter(): number;
    description(): string;
};

export interface ShapeModule<C extends ShapeConfig, S extends ShapeOf<C['type']>> {
    type: C['type'];
    create(config: C): S;
};
