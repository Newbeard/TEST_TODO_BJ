import React from 'react';
import {useDispatch} from 'react-redux'
import {pageTaskFromServer} from '../../redux/actions/task.action'

function Pagination({amountTask}) {
  const numberPages = [];
  const dispatch = useDispatch();

  for (let i = 1; i <= Math.ceil(amountTask/3); i+=1){
    numberPages.push(i)
  }

  const handlerClickPage = (event) =>{
   const payload = {page:+event.target.innerText};
   dispatch(pageTaskFromServer(payload))
  }
  return (
    
<ul className="uk-pagination uk-flex-center uk-position-bottom uk-margin-medium-top">
   {numberPages?.map((page) => <div className="pagination" key={page}><li><button className="btn-pagination" onClick={handlerClickPage}>{page}</button></li></div>)}
</ul>
  
  );
}

export default Pagination;
