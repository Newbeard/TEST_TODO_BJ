import React from 'react';

function NewTask(props) {
const handlerSubmit = (event) => {
  event.preventDefault();
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
					<input className="uk-input" id="task" type="text" name="task" placeholder="New task" autoComplete="off"/>
				</div>
			
				<button className="uk-button uk-button-secondary btnNewTask">Add</button>
		  </form>
  );
}

export default NewTask;
