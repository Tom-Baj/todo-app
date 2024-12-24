import React, { useState, useEffect } from 'react';
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
    const [tasks, setTasks] = useState(() => {
        try {
            const savedTasks = localStorage.getItem('tasks');
            return savedTasks ? JSON.parse(savedTasks) : [];
        } catch (error) {
            console.error(
                'Erreur lors du chargement initial des tâches :',
                error,
            );
            return [];
        }
    });

    const addTask = (taskName) => {
        if (taskName.trim() !== '') {
            setTasks([
                ...tasks,
                { id: Date.now(), name: taskName, completed: false },
            ]);
        }
    };

    const deleteTask = (taskId) => {
        const updatedTasks = tasks.filter((task) => task.id !== taskId);
        setTasks(updatedTasks);
    };

    useEffect(() => {
        try {
            localStorage.setItem('tasks', JSON.stringify(tasks));
        } catch (error) {
            console.error('Erreur lors de la sauvegarde des tâches :', error);
        }
    }, [tasks]);

    return (
        <>
            <div className="header">
                <StyledTitre>To-Do List</StyledTitre>
                <TodoInput addTask={addTask} />
            </div>
            <div className="main">
                <TodoList tasks={tasks} deleteTask={deleteTask} />
            </div>
        </>
    );
}

export default Home;
