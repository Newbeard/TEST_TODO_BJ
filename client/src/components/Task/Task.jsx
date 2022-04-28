import React, {useRef, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {filterTaskFromServer} from '../../redux/actions/task.action'


function Task({tasks}) {
  const selectRefsort = useRef(null);
  const selectRefparam = useRef(null);
  const {page} = useSelector(state => state.tasks)
  const dispatch = useDispatch()

  const handlerClick =(event) =>{
    const payload = {paramsort1: selectRefsort.current.value ,paramsort2: selectRefparam.current.value, page}
    dispatch(filterTaskFromServer(payload))
  }

  useEffect(() =>{
    
  },[])

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
    <button  onClick={handlerClick} className="uk-button uk-button-secondary btnNewTask">Show</button>
   </div>
    </>
  );
}

export default Task;
