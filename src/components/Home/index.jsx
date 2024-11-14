/* import styled from 'styled-components';
 */ import TodoTitle from '../../components/TodoTitle';
import TodoItem from '../../components/TodoItem';

/* const StyledTitre = styled.h1`
    color: #333;
    font-size: 2rem;
    text-align: center;
`; */

function Home() {
    return (
        <div className="main">
            {/*             <StyledTitre>To-Do List</StyledTitre> */}{' '}
            <TodoTitle />
            <TodoItem />
        </div>
    );
}

export default Home;
