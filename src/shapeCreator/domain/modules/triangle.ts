import { roundNumber } from "../../utils/numbers";
import type { Shape, ShapeModule } from "../shape";
import type { TriangleConfig } from "../../types/shapeConfig";

export class Triangle implements Shape {
    readonly type = "triangle";

    constructor(private readonly config: TriangleConfig) {
        if (config.a <= 0 || config.b <= 0 || config.c <= 0) throw new Error(`Sides must be greater than 0.`);
    };

    perimeter(): number {
        return roundNumber(this.config.a + this.config.b + this.config.c);
    };

    area(): number {
        return roundNumber(1/4 * Math.sqrt((this.config.a + this.config.b + this.config.c) * (-this.config.a + this.config.b + this.config.c) * (this.config.a - this.config.b + this.config.c) * (this.config.a + this.config.b - this.config.c)));
    };

    description(): string {
        return `Type: ${this.type}\nSides: (${this.config.a}, ${this.config.b}, ${this.config.c})\nPerimeter: ${this.perimeter()}\nArea: ${this.area()}\n----------`;  
    };
};

export const triangleModule: ShapeModule<TriangleConfig, Triangle> = {
    type: "triangle",
    create(config) {
        return new Triangle(config);
    },
};
