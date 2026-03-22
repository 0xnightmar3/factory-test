import { shapeModules } from "./domain/shapeModules";
import { ShapeFactory } from "./factory/shapeFactory";
import { ShapeRegistry } from "./registry/shapeRegistry";

export const instantiateShapeFactory = () => {
    const shapeRegistry = new ShapeRegistry();
    shapeModules.forEach(({ type, create }) => shapeRegistry.register(type, create));
    return new ShapeFactory(shapeRegistry);
};
