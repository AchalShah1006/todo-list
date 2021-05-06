import React from 'react'

import { useDispatch } from 'react-redux'
import { setCheck } from '../../features/todoSlice' 

import './listTodo.css'

function ListTodo({ name, done, id }) {
    const dispatch = useDispatch()
    const handleChange = () => {
        dispatch(
            setCheck(id)
        )
    }
    return (
        <div className='todo-item'>
            <input type="checkbox" checked={done} onChange={handleChange} />
            <p className={done ? 'todo--checked' : 'todo-list'}>{name}</p>
        </div>
    )
}

export default ListTodo
