const UIReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_MENU":
      return { ...state, isNavOpen: !state.isNavOpen };
    case "TOGGLE_FULL":
      return { ...state, isFull: !state.isFull };
    default:
      return state;
  }
};

export default UIReducer;
