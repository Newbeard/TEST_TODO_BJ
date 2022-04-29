import React from 'react';
import {newTaskFromServer } from '../../redux/actions/task.action'
import { useDispatch} from 'react-redux'

function NewTask(props) {
  const dispatch = useDispatch()
  const handlerSubmit = (event) => {
  event.preventDefault();
  const form = event.target;
  const payload = Object.fromEntries(new FormData(form));
  dispatch(newTaskFromServer(payload));
}

  return (
    
    	<form className="uk-flex" onSubmit={handlerSubmit}>
		
				<div className="uk-inline">
					<input className="uk-input" type="text" id="name" name="name" placeholder="Name" autoComplete="off" />
		  	</div>

				<div className="uk-inline">
					<input className="uk-input" id="email" type="text" name="email" placeholder="Email" autoComplete="off" />
				</div>
			
				<div className="uk-inline">
					<input className="uk-input" id="task" type="text" name="title" placeholder="New task" autoComplete="off"/>
				</div>
			
				<button className="uk-button uk-button-secondary btnNewTask">Add</button>
		  </form>
  );
}

export default NewTask;
