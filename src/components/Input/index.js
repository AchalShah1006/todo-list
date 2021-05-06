import React, { useState } from 'react'
import { TextField, IconButton } from '@material-ui/core';
import { useDispatch } from 'react-redux'
import { saveTodo } from '../../features/todoSlice'

import './input.css'

function Input() {
    const [input, setInput] = useState('');
    const dispatch = useDispatch()

    const todo = () => {
        if(input === ''){
            return
        }
        dispatch(saveTodo({
            input: input,
            done: false,
            id: Date.now()
        }))
        setInput('')
    }

    return (   
        <div className="inputDiv">
                <TextField
                    required
                    color="secondary"
                    id="outlined-required"
                    label="Add Todo"
                    value={input}
                    variant="outlined"
                    className="input"
                    onChange={e => setInput(e.target.value)}
                />
                <IconButton aria-label="add" onClick={todo}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/></svg>
                </IconButton>
        </div>
    )
}

export default Input
