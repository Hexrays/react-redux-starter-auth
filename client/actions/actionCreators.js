// BP Add state
export function addState(index, state) {
    console.log('creating state');
    return {
        type: 'ADD_STATE',
        index,
        state
    }
}

let nextTodoId = 0;

export const addTodo = (text) => {
    return {
        type: 'ADD_TODO',
        id: nextTodoId++,
        text
    }
}