import styled from 'styled-components';
import Checkbox from '../Checkbox';
import Icon from '../Icon';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

const TodoItemWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
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

const IconWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

function TodoItem({ name }) {
    return (
        <TodoItemWrapper>
            <Checkbox />
            <StyledTodoTitle>{name}</StyledTodoTitle>
            <IconWrapper>
                <Icon type={faPen} />
                <Icon type={faTrash} />
            </IconWrapper>
        </TodoItemWrapper>
    );
}

export default TodoItem;
