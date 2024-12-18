import styled from 'styled-components';
import Icon from '../Icon';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const StyledTodoFormContainer = styled.form`
    display: flex;
    flex-direction: row;
`;

const StyledAddButton = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    juste-content: center;
    margin: 0;
    gap: 1rem;
    border-radius: 50%;
    padding: 0.5rem;
    background-color: var(--gold);
    box-shadow:
        5px 5px 10px #bebdb2,
        -5px -5px 10px #ffffff;
    color: var(--dark-green);
    transition: 0.3s;
    &:hover {
        background-color: var(--green-color);
    }
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
        <StyledTodoFormContainer onSubmit={handleSubmit}>
            <label htmlFor="todo-input" className="todo-input__label">
                <StyledTodoInput
                    id="todo-input"
                    className="todo-input__field"
                    type="text"
                    placeholder="Ajouter une tâche"
                />
            </label>
            <StyledAddButton>
                <Icon className="plus" type={faPlus} />
            </StyledAddButton>
        </StyledTodoFormContainer>
    );
}

export default TodoInput;
