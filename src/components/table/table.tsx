import React, { useEffect, useState,useMemo } from 'react'
import './table.css'
import { Line } from '../line/line'
import { dataType } from '../../types/types'
import {Pagination} from '../pagination/pagination'



const PageSize = 10
interface ITable{
    dataVisible:dataType[]
}
const Table:React.FC<ITable> = ({dataVisible}) =>{
    const [currentPage , setCurrentPage] = useState(0)
    const paginationHandler = (e:any) =>{
        console.log(e.target.getAttribute('value'))
        setCurrentPage(e.target.getAttribute('value')-1)
    }

    /* <Pagination 
                            defaultActivePage={currentPage} 
                            boundaryRange={0}
                            ellipsisItem={null}
                            firstItem={null} 
                            lastItem={null} 
                            pointing 
                            secondary 
                            totalPages={10} 

                            siblingRange={1}
                            onClick={paginationHandler}
                            />
                            
    {dataVisible.slice(currentPage * 10 , (currentPage * 10) + 10).map((el:dataType) =>{
                                return(<Line line={el} ></Line>)
                            })}
                            */
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12 tableMain">
                    <table className='table'>
                        <thead>
                            <tr>
                                <th scope='col'>
                                    <div className="thContainer">
                                        <span>ID</span>
                                        <i className="bi bi-calendar3-week"></i>
                                    </div>
                                </th>
                                <th scope='col'>
                                    <div className="thContainer">
                                        <span>Заголовок</span>
                                    </div>
                                </th>
                                <th scope='col'>
                                    <div className="thContainer">
                                        <span>Описание</span>
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
                        onPageChange={(page:number) => setCurrentPage(page-1)}
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