import { isUnset } from "./isUnset";

export const isSet = (o: any): boolean => !isUnset(o);
