import type { ShapeConfig, ShapeType } from "../types/shapeConfig";

export interface Shape {
    readonly type: ShapeType;
    area(): number;
    perimeter(): number;
    description(): string;
};

export interface ShapeModule {
    type: ShapeType;
    create(config: ShapeConfig): Shape;
};
