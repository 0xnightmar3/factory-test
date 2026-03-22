import type { AnyShapeModule } from "./shape";
import { circleModule } from "./modules/circle";
import { rectangleModule } from "./modules/rectangle";

export const shapeModules = [circleModule, rectangleModule] satisfies AnyShapeModule[];
