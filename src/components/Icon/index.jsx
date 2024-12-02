import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StyledButton = styled.button`
    font-size: 1rem;
    cursor: pointer;
`;

function Icon({ type }) {
    return (
        <StyledButton className="todo-input__button" type="submit">
            <FontAwesomeIcon icon={type} />
        </StyledButton>
    );
}

export default Icon;
