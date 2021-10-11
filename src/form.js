import React,{useState} from 'react';
import './form.css';

const Form = (props) => {
	const [todo,setTodo]=useState("");

	const handleSubmit = (event) =>{
		event.preventDefault();
		if(!todo) return;
		props.add(todo);
		setTodo("");
		console.log(todo);
	};


	return (
		<form className="container row mt-5 mb-5" onSubmit={handleSubmit}>
		    <div className="col-sm-3"></div>
		    <div className="col-sm-5">
		    	<input 
		    	className="form-control" 
		    	placeholder="Add TODO" 
		    	onChange={(e)=>setTodo(e.target.value)}
		    	/>
		    </div>

		    <div className="col-sm-1">
		       <button type="submit" className="btn btn-success"><i className="fas fa-plus"></i></button>
		    </div>

		</form>
	);
};
export default Form;



