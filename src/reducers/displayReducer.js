let initialState = {
  1: 'square',
  2: 'circle',
  3: 'triangle',
  4: 'plus'
};

const displayReducer = (state=initialState, action) => {
  switch (action.type) {
    case 'UPDATE_ICON_DISPLAY':
      return {
        ...action.sequence
      }
    default:
      return state;
  }
}

export default displayReducer;
