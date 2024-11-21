import styled from 'styled-components';
import TodoInput from '../../components/TodoInput';
import TodoItem from '../../components/TodoItem';

const StyledTitre = styled.h1`
    color: var(--dark-green);
    font-size: 2rem;
    text-align: center;
    margin-bottom: 20px;
`;

function Home() {
    return (
        <div className="main">
            <StyledTitre>To-Do List</StyledTitre>
            <TodoInput />
            <TodoItem />
        </div>
    );
}

export default Home;
