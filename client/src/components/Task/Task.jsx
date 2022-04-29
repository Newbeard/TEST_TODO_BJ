import React, {useRef, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {filterTaskFromServer, approvedTaskFromServer, completTaskFromServer } from '../../redux/actions/task.action'



function Task({tasks}) {
  const selectRefsort = useRef(null);
  const selectRefparam = useRef(null);
  const {page} = useSelector(state => state.tasks)
  const {values} = useSelector(state => state.user)
  const dispatch = useDispatch()

  useEffect(() => {

  },[])

  const handlerClickSort =(event) =>{
    const payload = {paramsort1: selectRefsort.current.value ,paramsort2: selectRefparam.current.value, page}
    dispatch(filterTaskFromServer(payload))
  }
  const handlerClicApprov = (event) =>{
    const payload ={id: event.target.dataset.id, paramsort1: selectRefsort.current.value,paramsort2: selectRefparam.current.value, page};
    dispatch(approvedTaskFromServer(payload))
  }
  const handlerClickComplet =(event) => {
    const payload ={id: event.target.dataset.id, paramsort1: selectRefsort.current.value,paramsort2: selectRefparam.current.value, page}
    dispatch(completTaskFromServer(payload))
  }

  return (
    <>
    <div className="uk-flex uk-margin">
     <select  ref={selectRefsort} className="selekt">
      <option value="ASC">sort ascending</option>
      <option value="DESC">sort descending</option>
     </select>
     <select ref={selectRefparam} className="selekt">
      <option value="name">sort name</option>
      <option value="email">sort email</option>
      <option value="status">sort status</option>
     </select>
     <button  onClick={handlerClickSort} className="uk-button uk-button-secondary btnNewTask">Show</button>
    </div>
    <div className="tasks">
      {tasks?.map((task) => 
      <div key={task.id} className="card-list"> 
        <div className="card-item">{task.name}</div>
        <div className="card-item">{task.email}</div>
        <div className="card-item">{task.title}</div>
        <div className="card-item">{task.status}</div>
        <div className="card-item">{task.isApproved}</div>
        {values.isAdmin && <div  className="card-item card-item-btn-box">
          <button className="card-item-btn" data-id={task.id} onClick = {handlerClicApprov} >Approved</button>
          <button className="card-item-btn" data-id={task.id} onClick = {handlerClickComplet} >Сompleted</button>
        </div>}
      </div>
      )
      }
    </div>
    </>
  );
}

export default Task;
