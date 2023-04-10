import React from "react";
import styled from "styled-components";
import { MdCheckCircle, MdCheckBoxOutlineBlank} from "react-icons/md";

const TodoItem1 = styled.div`
margin-left: auto;
margin-right:auto;
padding:10px;
display:flex;
align-items: center;

.item {
    font-size:20px;
    margin-left:auto;
}
.item2 {
    font-size:20px;
}

`
const Text1 = styled.text`
    margin-left: 4px;
    margin-bottom:100px;
    color: gray;
    text-decoration: line-through;
    opacity: 0.6;
    font-size:20px;
`
const Text2 = styled.text`
margin-left: 4px;
color: black;
font-size:20px;
`

const TodoItem = ({ todo, onCheckToggle, onInsertToggle, onChangeSelectedTodo }) => {
    const { id, text, checked } = todo;
    return (
    <div>
        <TodoItem1>
    <div className="item2" onClick={() => {
        onCheckToggle(id);
    }}>
    {checked ? <MdCheckCircle />  : <MdCheckBoxOutlineBlank />}
    
    </div>
    <div  onClick={() => {
        onChangeSelectedTodo(todo);
        onInsertToggle();
    }}>
    {checked ? <Text1>{text}</Text1> : <Text2>{text}</Text2>  }
    </div>
   
   
        </TodoItem1>
        
    </div>
    )
}
export default TodoItem