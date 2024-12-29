import React, { useState } from 'react';
import styled from 'styled-components';
import Icon from '../Icon';
import { faPen, faTrash, faCheck } from '@fortawesome/free-solid-svg-icons';

const TodoItemWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    box-shadow:
        5px 5px 10px #bebdb2,
        -5px -5px 10px #ffffff;
    background-color: var(--low-wight);
`;

const StyledTodoTitle = styled.input`
    color: var(--dark-green);
    font-size: 1.5rem;
    text-align: center;
    background: none;
    border: none;
    outline: none;
    width: 100%;
`;

const IconWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

function TodoItem({ id, name, deleteTask, editTask }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedName, setEditedName] = useState(name);

    const handleEdit = () => {
        if (isEditing && editedName.trim() !== '') {
            editTask(id, editedName);
        }
        setIsEditing(!isEditing);
    };

    return (
        <TodoItemWrapper>
            {isEditing ? (
                <StyledTodoTitle
                    type="text"
                    value={editedName}
                    onChange={(e) => setEditedName(e.target.value)}
                />
            ) : (
                <p>{name}</p>
            )}
            <IconWrapper>
                <Icon type={isEditing ? faCheck : faPen} onClick={handleEdit} />
                <Icon type={faTrash} onClick={() => deleteTask(id)} />
            </IconWrapper>
        </TodoItemWrapper>
    );
}

export default TodoItem;
