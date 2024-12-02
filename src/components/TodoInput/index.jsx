import styled from 'styled-components';
import Icon from '../Icon';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const StyledTodoContainer = styled.form`
    display: flex;
    flex-direction: row;
`;

const StyledTodoInput = styled.input`
    border: 1px solid var(--light-brown);
    font-size: 1rem;
    margin: 10px;
    padding: 10px;
    border-radius: 0.5rem;
    background-color: var(--gold);
    &:focus {
        outline: none;
    }
`;

function TodoInput({ addTask }) {
    const handleSubmit = (event) => {
        event.preventDefault();
        const taskName = event.target.querySelector('.todo-input__field').value;
        addTask(taskName);
        event.target.reset();
    };

    return (
        <StyledTodoContainer onSubmit={handleSubmit}>
            <label htmlFor="todo-input" className="todo-input__label">
                <StyledTodoInput
                    id="todo-input"
                    className="todo-input__field"
                    type="text"
                    placeholder="Ajouter une tâche"
                />
            </label>
            <Icon type={faPlus} />
        </StyledTodoContainer>
    );
}

export default TodoInput;
