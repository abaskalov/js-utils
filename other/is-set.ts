import { isUnset } from "./is-unset";

export const isSet = (o: any): boolean => !isUnset(o);
