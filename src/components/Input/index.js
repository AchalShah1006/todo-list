import React, { useState } from 'react'

import { useDispatch } from 'react-redux'
import { saveTodo } from '../../features/todoSlice'

import './input.css'

function Input() {
    const [input, setInput] = useState('');
    const dispatch = useDispatch()

    const todo = () => {
        // console.log(`Adding ${input}`)    

        dispatch(saveTodo({
            input: input,
            done: false,
            id: Date.now()
        }))
        setInput('')
    }

    return (   
        <div className="inputDiv">
            <input className="input" type='text' value={input} onChange={e => setInput(e.target.value)} />
            <button className='btn' onClick={todo}>Add!</button>
        </div>
    )
}

export default Input
