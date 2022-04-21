import NewTask from '../NewTask/NewTask'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react'
import {initTaskFromServer } from '../../redux/actions/task.action'

export default function Home(props) {
  const dispatch = useDispatch();
  const { task } = useSelector((state) => state)
  useEffect(() => {
    dispatch(initTaskFromServer())
  }, [dispatch])

  return (
    
   <>
   <NewTask/>
   {task?.map((task) => <div key={task.id}>task.name</div>)}
   </>
);
}



