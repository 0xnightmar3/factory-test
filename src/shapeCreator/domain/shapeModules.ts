import type { ShapeModule } from "./shape";
import { circleModule } from "./modules/circle";
import { rectangleModule } from "./modules/rectangle";

export const shapeModules: ShapeModule[] = [circleModule, rectangleModule];
