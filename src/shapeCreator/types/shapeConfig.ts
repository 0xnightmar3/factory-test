export type ShapeType = "circle" | "rectangle" | "triangle";

export interface CircleConfig {
    type: "circle",
    radius: number;
};

export interface RectangleConfig {
    type: "rectangle",
    width: number;
    height: number;
};

export interface TriangleConfig {
    type: "triangle",
    a: number;
    b: number;
    c: number;
};

export type ShapeConfig =
    | CircleConfig
    | RectangleConfig
    | TriangleConfig;
