import React from 'react';
import AddToDo from '../AddToDo/AddToDo';
import TodoList from '../TodoList/TodoList';

const Home = () => {
    return (
        <div>
            <AddToDo />
            <TodoList />
        </div>
    );
};

export default Home;