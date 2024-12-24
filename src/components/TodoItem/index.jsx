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
    box-shadow:
        5px 5px 10px #bebdb2,
        -5px -5px 10px #ffffff;
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

function TodoItem({ completed, id, name, deleteTask }) {
    return (
        <TodoItemWrapper>
            <Checkbox completed={false} />
            <StyledTodoTitle>{name}</StyledTodoTitle>
            <IconWrapper>
                <Icon type={faPen} />
                <Icon
                    type={faTrash}
                    onClick={() => {
                        deleteTask(id);
                    }}
                />
            </IconWrapper>
        </TodoItemWrapper>
    );
}

export default TodoItem;
