import styled from 'styled-components';
import TodoItem from '../TodoItem';

const StyledTodoList = styled.div`
    border: 1px solid var(--dark-green);
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

function TodoList(tasks) {
    return (
        <StyledTodoList>
            <TodoItem />
            <TodoItem />
            <TodoItem />
        </StyledTodoList>
    );
}

export default TodoList;
