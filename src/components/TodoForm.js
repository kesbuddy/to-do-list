import React, { useState } from 'react'

function TodoForm(props) {

    const [input, setInput] = useState('');

    const handleChange = e => {
        setInput(e.target.value);
    };

    const handleInput = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random * 100),   // this is for storing text value and id as different task will have different names 
            text: input
        });

    };
    return (
        <div >
            <form className='to-do-list' onSubmit={handleInput}>
                <input
                    type='text'
                    placeholder='Add Task'
                    value={input}
                    name='text'
                    className='input'
                    onChange={handleChange} />
                <button className='button' onClick={() => setInput('')}>Add Task</button>
            </form>
        </div>
    )
}

export default TodoForm;