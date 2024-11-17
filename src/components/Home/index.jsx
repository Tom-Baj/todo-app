import styled from 'styled-components';
import TodoItem from '../TodoItem';
import Button from '../common/Button';

const StyledTitre = styled.h1`
    color: var(--dark-green);
    font-size: 2rem;
    text-align: center;
`;

function Home() {
    return (
        <div className="main">
            <StyledTitre>To-Do List</StyledTitre>
            <Button />
            <TodoItem />
        </div>
    );
}

export default Home;
