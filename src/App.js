import React, {useState} from 'react'; 
import './App.css';
import Header from './Header.js';
import ToDoList from './ToDoList';
import Form from './form.js';
import data from './data';

function App() {
  const [toDoList,setToDoList]=useState(data);

  const addTodo = async (todo) => {
    await setToDoList((prevState) => {
          return [...prevState, todo];
      })

  }
  const deleteTodo= (id) => {
    console.log(id);
    setToDoList((prevState) => {
          return prevState.filter((ele,index)=>{
            return index!==id;
          })
      })
  }
  const moveUp=(idx) => {
    console.log(idx);
    setToDoList((prevState) => {
    if (idx>0) {
      const currTodo=prevState.slice();
      const temp=currTodo[idx];
      currTodo[idx] = currTodo[idx - 1];
      currTodo[idx-1] = temp;
      return currTodo;
    }else{
      console.log("less");
      return prevState;
    }
  })}

  const moveDown= (idx) => {
    console.log(idx);
    setToDoList((prevState) => {
    if (idx<toDoList.length-1) {
      const currTodo=prevState.slice();
      const temp=currTodo[idx];
      currTodo[idx] = currTodo[idx+1];
      currTodo[idx+1] = temp;
      return currTodo;
    }else{
      console.log("more");
      return prevState;
    }
  })
  }
  return (
    <div className="App">
        <Header/>
        <center>
        <Form add={addTodo}/>
          <div className="ToDoList">
            <ToDoList  toDoList={toDoList} deleteTodo={deleteTodo} moveUp={moveUp} moveDown={moveDown}/>
          </div>
        </center>
    </div>
  );
}
export default App;
