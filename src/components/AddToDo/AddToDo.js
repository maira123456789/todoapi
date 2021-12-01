import React, {useContext, useState } from 'react';
import { todoContext } from "../../contexts/TodoContext";

const AddToDo = () => {
    const [inpValue, setInpValue] = useState('')
    const {addTask} = useContext(todoContext)
    
    function handleClick (){
        let newObj = {
            task: inpValue,
            status: false
        }
        addTask(newObj)
        setInpValue('')
    }
    return (
        <div>
            <input value={inpValue} onChange={(e) => setInpValue(e.target.value)} type="text"/>
            <button onClick={handleClick} >Add</button>
        </div>
    );
};

export default AddToDo;