import { myContainer } from "./config/inversify.config";
import { TYPES } from "./types";
import { Warrior } from "./interfaces";

const warriors: Warrior[] = myContainer.getAll<Warrior>(TYPES.Warrior);

console.log(warriors)
