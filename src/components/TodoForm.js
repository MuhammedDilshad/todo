import React, { useState, useEffect, useRef } from 'react'

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '')

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = e => {
        setInput(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        })
        setInput('')
    }
    return (
        <form className='todoform' onSubmit={handleSubmit}>
            {props.edit ? (<><input
                type="text"
                className='todo-input edit'
                value={input}
                placeholder="Update Your Item"
                name='text'
                onChange={handleChange}
                ref={inputRef} /><button className='todo-button edit'>Update</button></>):
                (<><input type="text"
                    className='todo-input'
                    value={input}
                    placeholder="add a Todo"
                    name='text'
                    onChange={handleChange}
                    ref={inputRef} /><button className='todo-button'>Add Todo</button></>)
                }

        </form>
    )
}

export default TodoForm