import { QueryObjectInterface } from "../interfaces/QueryObjectInterface";

export const removeQueryParams = (
  query: QueryObjectInterface = {},
  params: string[] = []
): QueryObjectInterface => {
  const clone: QueryObjectInterface = Object.assign({}, query);

  params.forEach((param) => {
    if (clone[param]) {
      delete clone[param];
    }
  });
  return clone;
};
