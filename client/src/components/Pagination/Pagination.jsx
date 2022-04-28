import React from 'react';
import {useDispatch} from 'react-redux'
import {pageTaskFromServer} from '../../redux/actions/task.action'

function Pagination({amountTask}) {
  const numberPages = [];
  const dispatch = useDispatch();

  for (let i = 1; i <= Math.ceil(amountTask/2); i+=1){
    numberPages.push(i)
  }

  const handlerClick = (event) =>{
    event.preventDefault()
    const payload = {page:+event.target.innerText};

    dispatch(pageTaskFromServer(payload))
  }
  return (
    
<ul className="uk-pagination uk-flex-center uk-position-bottom uk-margin-medium-top">
   {numberPages?.map((page) => <div className="pagination" key={page}><li><a className="uk-text-muted" href="#" onClick={handlerClick}>{page}</a></li></div>)}
</ul>
  
  );
}

export default Pagination;
