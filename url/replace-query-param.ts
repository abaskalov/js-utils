import { QueryObjectInterface } from "../interfaces/QueryObjectInterface";

export const replaceQueryParams = (
  query: QueryObjectInterface = {},
  params: QueryObjectInterface = {}
): QueryObjectInterface => {
  return Object.assign(Object.assign({}, query), params);
};
