import { cowModule } from "./cow";
import { dogModule } from "./dog";
import { catModule } from "./cat";
import type { AnimalModule } from "../animalModule";


export const animalModules: AnimalModule[] = [catModule, dogModule, cowModule];
