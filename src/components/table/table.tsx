import React, { useEffect, useState,useMemo, useCallback } from 'react'
import './table.css'
import { Line } from '../line/line'
import { dataType } from '../../types/types'
import {Pagination} from '../pagination/pagination'
import { ITable } from '../../types/types'


const PageSize = 10

const Table:React.FC<ITable> = ({dataVisible,sortedHandler}) =>{
    const [currentPage , setCurrentPage] = useState(0)

    const onPageChange = (page:number,e:any) => {
        setCurrentPage(page-1)
    }
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12 tableMain">
                    <table className='table'>
                        <thead>
                            <tr>
                                <th scope='col'>
                                    <div className="thContainer" >
                                        <span >ID</span>
                                        <i className="fa fa-angle-down id rotate"  aria-hidden="false"  onClick={sortedHandler}></i>
                                    
                                    </div>
                                </th>
                                <th scope='col'>
                                    <div className="thContainer" >
                                        <span>Заголовок</span>
                                        <i className="fa fa-angle-down title" aria-hidden="true" onClick={sortedHandler}></i>
                                    </div>
                                </th>
                                <th scope='col'>
                                    <div className="thContainer">
                                        <span>Описание</span>
                                        <i className="fa fa-angle-down body" aria-hidden="true"  onClick={sortedHandler}></i>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                        {dataVisible.slice(currentPage * 10 , (currentPage * 10) + 10).map((el:dataType) =>{
                                return(<Line line={el} ></Line>)
                            })}
                            
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 paginationMain">
                    <Pagination 
                        onPageChange={onPageChange}
                        totalCount={dataVisible.length}
                        pageSize={PageSize}
                        siblingCount={1}
                        currentPage= {currentPage}
                        className={''}
                    />
                </div>
            </div>
        </div>
    )
}

export default Table;