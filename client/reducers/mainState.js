function addState(state = [], action) {
  switch(action.type){
    case 'ADD_STATE':
      // return the new state with the new comment
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
  return state;
}

function mainState(state = [], action) {
  if(typeof action.index !== 'undefined') {
    return [
      // take the current state
      ...state,
      // overwrite this post with a new one
      addState(state[action.index], action)
    ]
  }
  return state;
}

export default mainState;