import {clone, setWith, curry} from 'lodash/fp';

export const setIn = curry((path, value, obj) =>
  setWith(clone, path, value, clone(obj)),
);