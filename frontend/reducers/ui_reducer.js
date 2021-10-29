const uiReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  const newState = Object.assign({}, oldState);
  switch (action.type) {
    default:
      return oldState;
  }
};

export default uiReducer;
