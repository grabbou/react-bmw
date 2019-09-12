import BaseElement from './BaseElement';

let idx = 0;
const map = new Map<number, BaseElement<any>>();

export const register = (component: BaseElement<any>) => {
  map.set(idx, component);
  idx = idx + 1;
  return idx;
}
