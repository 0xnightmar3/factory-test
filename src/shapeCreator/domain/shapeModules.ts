import type { AnyShapeModule } from "./shape";
import { circleModule } from "./modules/circle";
import { triangleModule } from "./modules/triangle";
import { rectangleModule } from "./modules/rectangle";

export const shapeModules = [circleModule, rectangleModule, triangleModule] satisfies AnyShapeModule[];
