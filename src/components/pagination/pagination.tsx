import React from "react";
import { DOTS, usePagination } from "../../hooks/usePagination";
import './pagination.css'



interface IPagination{
    onPageChange:any,
    totalCount:number,
    siblingCount:number,
    currentPage:number,
    pageSize: number,
    className:string,
}

export const Pagination:React.FC<IPagination> = ({onPageChange,totalCount,siblingCount=1,currentPage,pageSize,className}) =>{
    const paginationRange = usePagination({currentPage, totalCount,siblingCount,pageSize})

    if (currentPage ==-1 || (typeof(paginationRange) == 'object' && paginationRange.length<2)){

        return null
    }
    const onNext = (e:any) =>{
        if(currentPage+2<=lastPage){
            console.log("onNext")
            console.log("to",currentPage)
            onPageChange(currentPage+2,e)
            console.log("do", currentPage)
        }
    }

    const onPrev = (e:any) =>{
        console.log("onPrev")
        if(currentPage-1!>=0){
            onPageChange(currentPage,e) 
        }
    }

    let lastPage = typeof(paginationRange) == 'object'? paginationRange[paginationRange.length-1] : -1
    
    console.log("asdasdadasadasda")
    return(
        <ul
        className='pagination'
      >
        <li
          className='pagination-item'
          onClick={onPrev}
        >
          <a className="page-link my-page-link-right" href="#"><div className="arrow left" /> Назад</a>
        </li>
        {typeof(paginationRange) == 'object'?paginationRange.map(pageNumber => {
          if (pageNumber  === DOTS) {
            return <li className="pagination-item dots"><a className="page-link" href="#">&#8230;</a></li>;
          }
  
          return (
            <li
              className='pagination-item'
              onClick={(e) => onPageChange(pageNumber,e)}
            >
                <a className="page-link" href="#">{pageNumber}</a>
            </li>
          );
        }): <></>}
        <li
          className='pagination-item'
          onClick={onNext}
        >
            <a className="page-link my-page-link-left" href="#"><div className="arrow right" />Далее</a>
        </li>
      </ul>
    )
}