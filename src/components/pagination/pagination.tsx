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
    const onNext = () =>{
        onPageChange(currentPage+1)
    }

    const onPrev = () =>{
        if(currentPage-1!>=1){
            onPageChange(currentPage-1) 
        }
    }

    let lastPage = typeof(paginationRange) == 'object'? paginationRange[paginationRange.length-1] : -1
    
    console.log("asdasdadasadasda")
    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <ul className='pagination'>
                        <li className='pagination-item' onClick={onPrev}>
                            <a className='' href="#"><div className="arrow left" />Назад</a>
                        </li>
                        {typeof(paginationRange) == 'object'? paginationRange.map(pageNumber => {
                            if (pageNumber === DOTS) {
                                return <li className="pagination-item dots"><a className='page-link' href="#">&#8230;</a></li>;
                            }
                    
                            return (
                                <li
                                className='pagination-item'
                                onClick={() => onPageChange(pageNumber)}
                                >
                                <a className="page-link" href="#">{pageNumber}</a>
                                </li>
                            );
                        }):<></>}
                        <li
                        className='pagination-item'
                        onClick={onNext}
                        >
                            <a className="my-page-link" href="#"><div className="arrow right">Далее</div></a>
                        </li>
                    </ul>
                </div>
                <div className="col">
                    <span>asdasd</span>
                </div>
            </div>
        </div>
    )
}