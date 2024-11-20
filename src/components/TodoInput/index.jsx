import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCaretRight } from '@fortawesome/free-solid-svg-icons';

const StyledTodoContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

const StyledTodoInput = styled.input`
    border: none;
    font-size: 1rem;
    margin: 10px;
    padding: 10px;
    background-color: transparent;
    &:focus {
        outline: none;
    }
`;

function TodoInput() {
    return (
        <StyledTodoContainer>
            <StyledTodoInput
                className="todo-input__field"
                type="text"
                placeholder="Ajouter une tâche"
            />
            <button className="todo-input__button">
                <FontAwesomeIcon
                    className="todo-input__icon"
                    icon={faSquareCaretRight}
                />
            </button>
        </StyledTodoContainer>
    );
}

export default TodoInput;
