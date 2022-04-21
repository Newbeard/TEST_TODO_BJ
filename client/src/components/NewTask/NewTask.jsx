import React from 'react';

function NewTask(props) {
const hendlerSubmit = (event) => {
  event.preventDefault();
}

  return (
    
    	<form className="uk-flex" onSubmit={hendlerSubmit}>
		
				<div className="uk-inline">
					<input className="uk-input" type="text" id="name" name="name" placeholder="Name" />
		  	</div>

				<div className="uk-inline">
					<input className="uk-input" id="email" type="text" name="email" placeholder="Email" />
				</div>
			
				<div className="uk-inline">
					<input className="uk-input" id="task" type="text" name="task" placeholder="Task" />
				</div>
			
				<button className="uk-button uk-button-secondary btnNewTask">Add</button>
		  </form>
  );
}

export default NewTask;
