import styled from 'styled-components';
import TodoItem from '../../components/TodoItem';

const StyledTitre = styled.h1`
    color: #333;
    font-size: 2rem;
    text-align: center;
`;

function Home() {
    return (
        <div className="main">
            <StyledTitre>To-Do List</StyledTitre>
            <TodoItem />
        </div>
    );
}

export default Home;
