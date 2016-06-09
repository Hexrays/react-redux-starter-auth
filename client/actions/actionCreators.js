// BP Add state
export function addState(index, state) {
    console.log('creating state');
    return {
        type: 'ADD_STATE',
        index,
        state
    }
}