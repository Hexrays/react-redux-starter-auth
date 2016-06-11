import React from 'react';

import AddTodo from '../containers/AddTodo';
import TodoList from '../containers/TodoList';

const Tasks = (props) => (
    <div className="tasks-container container">
        <AddTodo />
        <TodoList />
    </div>
);

export default Tasks;