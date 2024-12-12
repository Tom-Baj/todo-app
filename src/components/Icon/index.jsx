import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StyledIconWrapper = styled.div`
    display: flex;
    flex-direction: column;
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
        transform: scale(1.1);
    }
`;

const StyledButton = styled.button`
    font-size: 1rem;
    cursor: pointer;
`;

function Icon({ type }) {
    return (
        <StyledIconWrapper
            className="icon-w>
        rapper"
        >
            <StyledButton className="todo-input__button" type="submit">
                <FontAwesomeIcon icon={type} />
            </StyledButton>
        </StyledIconWrapper>
    );
}

export default Icon;
