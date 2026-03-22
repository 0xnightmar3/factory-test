import { roundNumber } from "../../utils/numbers";
import type { Shape, ShapeModule } from "../shape";
import type { RectangleConfig } from "../../types/shapeConfig";

export class Rectangle implements Shape {
    readonly type = "rectangle";

    constructor(private readonly config: RectangleConfig) {
        if (config.height <= 0 || config.width <= 0) throw new Error(`Rectangle width/height must be greater than 0.`);
    };

    perimeter(): number {
        return roundNumber(this.config.height * 2 + this.config.width * 2);
    };

    area(): number {
        return roundNumber(this.config.height * this.config.width);
    };

    description(): string {
        return `Type: ${this.type}\nWidth: ${this.config.width} | Height: ${this.config.height}\nPerimeter: ${this.perimeter()}\nArea: ${this.area()}\n--------`;  
    };
};

export const rectangleModule: ShapeModule<RectangleConfig, Rectangle> = {
    type: "rectangle",
    create(config) {
        return new Rectangle(config);
    },
};
