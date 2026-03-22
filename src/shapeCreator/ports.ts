import type { Shape } from "./domain/shape";
import type { ShapeConfig } from "./types/shapeConfig";

export type ShapeBuilder = (config: ShapeConfig) => Shape;

export interface ShapeProvider {
    create(config: ShapeConfig): Shape;
};
