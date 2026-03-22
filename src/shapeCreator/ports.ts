import type { ShapeOf } from "./domain/shape";
import type { ShapeConfig } from "./types/shapeConfig";

export type ShapeBuilder<C extends ShapeConfig, S extends ShapeOf<C['type']>> = (config: C) => S;

export interface ShapeProvider {
    create<C extends ShapeConfig>(config: C): ShapeOf<C['type']>;
};
