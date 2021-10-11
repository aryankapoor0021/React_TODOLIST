import React from 'react';
import ToDo from './toDo';

const ToDoList = (props) =>{
	return(
		<div>
		    {props.toDoList.map((todoItem,index) =>{
		    	return (
		    		<ToDo 
		    		key={index} 
		    		id={index}
		    		todo={todoItem}
		    		deleteTodo={props.deleteTodo}
		    		moveUp={props.moveUp}
		    		moveDown={props.moveDown}
		    	/>
		    )
		    })}
		</div>
		);
};

export default ToDoList;