import { shapeModules } from "./domain/shapeModules";
import { ShapeFactory } from "./factory/shapeFactory";
import { ShapeRegistry } from "./registry/shapeRegistry";

export const instantiateShapeFactory = () => {
    const shapeRegistry = new ShapeRegistry();
    shapeModules.forEach(module => shapeRegistry.register(module));
    return new ShapeFactory(shapeRegistry);
};
