import React from 'react';
import './todo.css'
 
const ToDo = (props) => {
   
    return (
       <div data-aos="fade-up" data-aos-duration="1000" data-aos-anchor-placement="top-bottom">
            <div className="ToDo row" >
              <div className="col-sm-1"> 
                <i className="fas fa-star text-light"></i>
              </div>
              <div className="col-sm-8" > 
                <span className="list_item"> {props.todo}</span>
              </div>
              <div className="col-sm-1">
                <button  className="btn btn-outline-danger" onClick={() => {
                  props.deleteTodo(props.id)
                }}
                ><i className="fas fa-trash"></i></button>
              </div>
              <div className="col-sm-1">
                <button  className="btn btn-outline-primary" onClick={() => {
                  props.moveUp(props.id)
                }}><i className="fas fa-chevron-up"></i></button>
              </div>
              <div className="col-sm-1">
                <button  className="btn btn-outline-warning" onClick={() => {
                  props.moveDown(props.id)
                }}><i className="fas fa-chevron-down"></i></button>
              </div>
           </div>
       </div>
   );
};
 
export default ToDo;