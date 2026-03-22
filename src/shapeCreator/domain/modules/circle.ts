import { roundNumber } from "../../utils/numbers";
import type { Shape, ShapeModule } from "../shape";
import type { CircleConfig } from "../../types/shapeConfig";

export class Circle implements Shape {
    readonly type = "circle";

    constructor(private readonly config: CircleConfig) {
        if (config.radius <= 0) throw new Error(`Radius must be greater than 0.`);
    };

    area(): number {
        return roundNumber(Math.PI * Math.pow(this.config.radius, 2));
    };

    perimeter(): number {
        return roundNumber(Math.PI * this.config.radius * 2);
    };

    description(): string {
        return `Type: ${this.type}\nRadius: ${this.config.radius}\nPerimeter: ${this.perimeter()}\nArea: ${this.area()}\n---------`;
    };
};

export const circleModule: ShapeModule<CircleConfig, Circle> = {
    type: "circle",
    create(config) {
        return new Circle(config);
    },
};
