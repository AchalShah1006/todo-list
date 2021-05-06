import React from 'react';
import Input from './components/Input';
import ListTodo from './components/ListTodo';
import Navbar from './components/Navbar';

import { useSelector } from 'react-redux';
import { selectTodoList } from './features/todoSlice' 

import './App.css';

function App() {
  const todoList = useSelector(selectTodoList)
  return (
    <div className="App">
      <Navbar />
      <Input />
      <div className="app-container">
          {todoList.map((item, index) => (
              <ListTodo
                key={index}
                input={item.input}
                checked={item.done}
                id={item.id}
              />
            ))}
      </div>
    </div>
  );
}

export default App;
