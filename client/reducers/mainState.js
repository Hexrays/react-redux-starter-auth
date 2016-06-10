function addState(state = [], action) {
  switch(action.type){
    case 'ADD_STATE':
      return [
        ...state,
        {
          yourState: action.state,
          index: action.index
        }
      ];

    default:
      return state;
  }
}

function mainState(state = [], action) {
  if(typeof action.index !== 'undefined') {
    return [
      ...state,
      addState(state[action.index], action)
    ]
  }
  return state;
}

export default mainState;