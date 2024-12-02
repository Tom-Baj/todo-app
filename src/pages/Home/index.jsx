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
    const [tasks, setTasks] = useState([]);

    const addTask = (taskName) => {
        if (taskName.trim() !== '') {
            setTasks([
                ...tasks,
                { id: Date.now(), name: taskName, completed: false },
            ]);
        }
    };

    /*     const deleteTask = (taskId) => {
        const updatedTasks = tasks.filter((task) => task.id !== taskId);
        setTasks(updatedTasks);
    }; */

    return (
        <div className="main">
            <StyledTitre>To-Do List</StyledTitre>
            <TodoInput addTask={addTask} />
            <TodoList tasks={tasks} /> {/* deleteTask={deleteTask} */}
        </div>
    );
}

export default Home;
