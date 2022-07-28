import React from "react";
import { DOTS, usePagination } from "../../hooks/usePagination";
import './pagination.css'
import { IPagination } from "../../types/types";



export const Pagination:React.FC<IPagination> = ({onPageChange,totalCount,siblingCount=1,currentPage,pageSize,className}) =>{
    const paginationRange = usePagination({currentPage, totalCount,siblingCount,pageSize})

    if (currentPage ==-1 || (typeof(paginationRange) == 'object' && paginationRange.length<2)){

        return null
    }
    const onNext = (e:any) =>{
        if(currentPage+2<=lastPage){
            const oldActive = document.getElementsByClassName('page-link')
            for ( let i=0; i<oldActive.length;i++){
              if(oldActive[i].classList.contains('active')){
                  oldActive[i].classList.remove('active')
                  oldActive[i+1].classList.add('active')
                  break;
              }
            }
            onPageChange(currentPage+2,e)
        }
    }

    const onPrev = (e:any) =>{
        if(currentPage-1>=0){
            const oldActive = document.getElementsByClassName('page-link')
            for ( let i=0; i<oldActive.length;i++){
              if(oldActive[i].classList.contains('active')){
                  oldActive[i].classList.remove('active')
                  oldActive[i-1].classList.add('active')
                  break;
              }
            }
            onPageChange(currentPage,e) 
        }
    }

    let lastPage = typeof(paginationRange) == 'object'? paginationRange[paginationRange.length-1] : -1
    

    const onChangeActive = (e:any,pageNumber:number|string) => {
      const oldActive = document.getElementsByClassName('active')
      for (let i=0; i< oldActive.length;i++){
        oldActive[i].classList.remove('active')
      }
      e.currentTarget.classList.add('active')
      e.target.href = '#'+(pageNumber).toString()
    }

    
    return(
        <ul
        className='pagination'
      >
        <li
          className='pagination-item'
          onClick={onPrev}
        >
          <a className="page-link my-page-link-right" href="#" onClick={
                    (e:any)=>{e.target.href = currentPage-1>0 ?"#"+(currentPage-1).toString():e.target.href='#1'}}>
              <div className="arrow left" /> Назад</a>
        </li>
        {typeof(paginationRange) == 'object'
        ?
        paginationRange.map(pageNumber => {
          if (pageNumber  === DOTS) {
            return <li className="pagination-item dots"><a className="page-link" href=''>&#8230;</a></li>;
          }
  
          return (
            pageNumber ==1
            ?
            <li
            className='pagination-item'
            onClick={(e:any) => onPageChange(pageNumber,e)}
            >
              <a className="page-link active" href="#" onClick={(e:any)=>onChangeActive(e,pageNumber)}>{pageNumber}</a>
            </li>
            :
            <li
              className='pagination-item'
              onClick={(e:any) => onPageChange(pageNumber,e)}
            >
                <a className="page-link" href="#" onClick={(e:any)=>onChangeActive(e,pageNumber)}>{pageNumber}</a>
            </li>
          );
        })
        : 
        <></>
        }

        <li
          className='pagination-item'
          onClick={onNext}
        >
          <a className="page-link my-page-link-left" href="#" onClick={
                  (e:any)=>{e.target.href = '#'+(currentPage+2).toString()}
                  }>
            <div className="arrow right" />Далее</a>
        </li>
      </ul>
    )
}