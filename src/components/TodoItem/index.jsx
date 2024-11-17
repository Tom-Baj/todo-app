import styled from 'styled-components';

// Composants stylés
const TodoItemWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 5rem;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
    background-color: var(--low-wight);
`;

const StyledTodoTitle = styled.p`
    color: var(--dark-green);
    font-size: 1.5rem;
    text-align: center;
`;

const DeleteButton = styled.button`
    background-color: var(--gold);
    color: var(--dark-green);
    border: none;
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    cursor: pointer;

    &:hover {
        background-color: var(--pink);
    }
`;

// Composant fonctionnel
function TodoItem() {
    return (
        <TodoItemWrapper>
            <input type="checkbox" />
            <StyledTodoTitle>Todo item</StyledTodoTitle>
            <DeleteButton>Delete</DeleteButton>
        </TodoItemWrapper>
    );
}

export default TodoItem;
