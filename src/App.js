import './App.css';
import { useState } from 'react';
import GlobalStyles from './components/GlobalStyle';
import Make from './Pages/Make';
import Header from './components/Header';
import Footer from './components/Footer';
import Template from './components/Template';
import TodoList from './components/TodoList';
import { MdAddCircle } from 'react-icons/md';
import TodoInsert from './components/TodoInsert';

let nextId = 4;




const App = () => {
  const [insertToggle, setInsertToggle] = useState(false);
  const [selectedTodo, setselectedTodo] = useState(null);
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "간식 사기",
      checked: true
    },
    {
      id: 2,
      text: "산책 하기",
      checked: false
    },
    {
      id: 3,
      text: "밥 주기",
      checked: true
    }
  ]);
  const onInsertToggle = () => {
    if(selectedTodo){
        setselectedTodo(null);
    }
    setInsertToggle(prev => !prev);
  };
  const onInsertTodo = (text) => {
    if (text === ""){
      return alert('일을 입력하세요.')
    } else{
      const todo = {
        id : nextId,
        text,
        checked: false
      };
      setTodos(todos => todos.concat(todo));
      nextId++;
    }
  }

  const onCheckToggle = (id) => {
    setTodos(todos => todos.map(todo => 
      (todo.id === id ? {...todo, checked : !todo.checked} : todo)))
  }
  const onChangeSelectedTodo = (todo) => {
    setselectedTodo(todo);
  }
  const onRemove = id => {
    onInsertToggle();
    setTodos(todos => todos.filter(todo => todo.id !== id))
  }
  const onUpdate = (id, text) => {
    onInsertToggle();
    setTodos(todos => 
      todos.map(todo =>todo.id === id ?{...todo, text} :todo ))
  }
  return (
  <div>
  <GlobalStyles />
    <Header todoLength={todos.length} />
    <Template>
      <TodoList 
      todos={todos} 
      onCheckToggle={onCheckToggle} 
      onInsertToggle={onInsertToggle}
      onChangeSelectedTodo={onChangeSelectedTodo}
      onRemove={onRemove}
      />
      <div className='todo-button' onClick={onInsertToggle}><MdAddCircle /></div>
    {insertToggle && <TodoInsert 
    onRemove={onRemove}
    selectedTodo={selectedTodo}
    onInsertToggle={onInsertToggle} 
    onInsertTodo={onInsertTodo}
    onUpdate={onUpdate}
    />}
    </Template>
    <Footer />
   
  </div>
  )
 
}

export default App;
