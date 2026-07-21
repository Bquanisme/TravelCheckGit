export const API_GET_EXAMPLE = 'API_GET_EXAMPLE';
export const API_FAIL = 'API_GET_FAIL';
export const API_REQUEST = 'API_GET_REQUEST';

interface requestAction {
  type: typeof API_REQUEST;
}

interface getAction {
  type: typeof API_GET_EXAMPLE;
  data: any
}

interface failAction {
  type: typeof API_FAIL
  error: string
}
export type userActionTypes =
  | requestAction
  | failAction
  | getAction