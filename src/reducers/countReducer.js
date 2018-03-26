let initialState = {
  square: 0,
  circle: 0,
  triangle: 0,
  plus: 0,
};

const iconCount = (state=initialState, action) => {
  switch(action.type) {
    case 'ADD_ONE_SQUARE':
      return {
        square: state.square++,
        ...state
      }
    case 'ADD_ONE_CIRCLE':
      return {
        circle: state.circle++,
        ...state
      }
    case 'ADD_ONE_TRIANGLE':
      return {
        triangle: state.triangle++,
        ...state
      }
    case 'ADD_ONE_PLUS':
      return {
        plus: state.plus++,
        ...state
      }
    case 'RESET_COUNT':
      return {
        square: 0,
        circle: 0,
        triangle: 0,
        plus: 0,
      };
    default:
      return state;
  }
};

export default iconCount;
