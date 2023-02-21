import React from 'react';

function Pagination({totalData,pagePerData,paginate,currentPage}) {

    const pages=[];

    for(let i=1; i<=Math.ceil(totalData/pagePerData); i++){
      pages.push(i)
    }
    return (
       <>
<div className="pagination">
                          {pages.map((page,index)=>{
                            return(
                              <button key={index} onClick={()=>paginate(page)} className={
                                page === currentPage ? 'active' : ''
                                }>
                                {page} 
                              </button>
                            ) 
                          })}
                   </div>
    
       </> 
    );
}

export default Pagination;