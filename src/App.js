import React from 'react';
import Input from './components/Input';
import './App.css';
import ListTodo from './components/ListTodo';

import { useSelector } from 'react-redux';
import { selectTodoList } from './features/todoSlice' 


function App() {
  const todoList = useSelector(selectTodoList)
  return (
    <div className="App">
      <div className="app_container">
        {/* Todo List */}
        <div>
          {
            todoList.map((item, index) => (
              <ListTodo
                key={index}
                name={item.input}
                done={item.done}
                id={item.id}
              />
            ))
          }
        </div>
        {/* Input */}
        <Input />
      </div>
    </div>
  );
}

export default App;
