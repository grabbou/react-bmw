import BaseElement from "./BaseElement";

export type ReactInstance = {
  _reactInternalFiber: {
    child: {
      stateNode: {
        id: number;
      };
    };
  };
};

export const getIdFromFiber = (fiber: ReactInstance) => {
  return fiber instanceof BaseElement
    ? fiber.id
    : fiber._reactInternalFiber.child.stateNode.id;
};
