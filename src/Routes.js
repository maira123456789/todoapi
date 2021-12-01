import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddToDo from './components/AddToDo/AddToDo';
import EditTodo from './components/EditTodo/EditTodo';
import Home from './components/Home/Home';
import TodoList from './components/TodoList/TodoList';

const MainRoutes = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/add" element={<AddToDo/>}/>
                    <Route path="/list" element={<TodoList/>} />
                    <Route path="/edit" element={<EditTodo/>} />
                </Routes>

            </BrowserRouter>
        </div>
    );
};

export default MainRoutes;