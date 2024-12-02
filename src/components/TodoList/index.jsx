import React from 'react';
import styled from 'styled-components';
import TodoItem from '../TodoItem';

const StyledTodoList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 80%;
`;

function TodoList({ tasks, deleteTask }) {
    return (
        <StyledTodoList>
            {tasks.map((task) => (
                <TodoItem
                    key={task.id}
                    id={task.id}
                    name={task.name}
                    completed={task.completed}
                    deleteTask={deleteTask}
                />
            ))}
        </StyledTodoList>
    );
}

export default TodoList;
