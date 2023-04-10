import React, { useEffect, useState } from "react"
import {TiTrash} from "react-icons/ti";
import { HiOutlinePencil } from "react-icons/hi";

import './TodoInsert.css';
const TodoInsert = ({onInsertToggle, onInsertTodo,selectedTodo,onRemove,onUpdate}) => {
    const [value, setValue] = useState("");

    const onChange = (e) => {
       setValue(e.target.value)
    }
    const onSubmit = (e) =>{
        e.preventDefault();
        onInsertTodo(value);
        setValue("");
        onInsertToggle();
    }
    useEffect(() => {
        if (selectedTodo){
            setValue(selectedTodo.text)
        }
    }, [selectedTodo]);
    return (
    <div>
       <div className="background" onClick={onInsertToggle}></div>
       <form onSubmit={selectedTodo ? () =>  
        {onUpdate(selectedTodo.id, value)}
        : onSubmit}>
        <input placeholder="입력해주세요"
        value={value}
        onChange={onChange}
        ></input>
        {selectedTodo ? (
            <div className="update">
                <HiOutlinePencil onClick={() => {onUpdate(selectedTodo.id, value)}} />
                 <TiTrash onClick={() =>
                 {onRemove(selectedTodo.id)}}/>
            </div>
        ) : (
        <button type="submit">
            추가
        </button>
        )}
       </form>
    </div>
        
    )
}
export default TodoInsert