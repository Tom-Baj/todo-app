import React, { useState } from 'react';
import styled from 'styled-components';
import TodoInput from '../../components/TodoInput';
import TodoList from '../../components/TodoList';

const StyledTitre = styled.h1`
    color: var(--dark-green);
    font-size: 2rem;
    text-align: center;
    margin-bottom: 20px;
`;

function Home() {
    const [tasks, setTasks] = useState([]); // État pour stocker les tâches

    // Fonction pour ajouter une nouvelle tâche
    const addTask = (taskName) => {
        if (taskName.trim() !== '') {
            setTasks([...tasks, { name: taskName, completed: false }]);
        }
    };

    return (
        <div className="main">
            <StyledTitre>To-Do List</StyledTitre>
            <TodoInput addTask={addTask} />
            <TodoList tasks={tasks} />
        </div>
    );
}

export default Home;
