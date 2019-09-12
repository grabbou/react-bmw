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
  return fiber._reactInternalFiber.child.stateNode.id;
};
