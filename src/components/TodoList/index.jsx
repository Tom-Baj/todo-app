import React from 'react';
import styled from 'styled-components';
import TodoItem from '../TodoItem';

const StyledTodoList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 80%;
`;

function TodoList({ tasks, deleteTask, editTask }) {
    return (
        <StyledTodoList>
            {tasks.length === 0 ? (
                <p>Aucune tâche à afficher</p>
            ) : (
                tasks.map((task) => (
                    <TodoItem
                        key={task.id}
                        id={task.id}
                        name={task.name}
                        deleteTask={deleteTask}
                        editTask={editTask}
                    />
                ))
            )}
        </StyledTodoList>
    );
}

export default TodoList;
