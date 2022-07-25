import React, { useEffect, useState } from 'react'
import './table.css'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { fetchDataTable } from '../../store/action-creators/data'
import { Line } from '../line/line'
import { dataType } from '../../types/types'
import { Pagination } from 'semantic-ui-react'

const Table:React.FC = () =>{
    const dispatch = useAppDispatch();
    const {data,error,loading} = useTypedSelector(state => state.data)
    let dataVisible:dataType[] = data
    const [currentPage , setCurrentPage] = useState(0)
    const allPages = Math.ceil(data.Lenght/10)

    useEffect(()=>{
        dispatch(fetchDataTable())
        dataVisible = data
    },[])
    console.log(data)

    if (loading){
        return(<h1>Загрузка</h1>)
    }
    if(error){
        return(<h1>{error}</h1>)
    }
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
                            <Pagination defaultActivePage={currentPage} firstItem={null} lastItem={null} pointing secondary totalPages={10} onClick={(e:any) => {
                                console.log(e.target.getAttribute('value'))
                                setCurrentPage(e.target.getAttribute('value'))}}/>
                            {dataVisible.slice(currentPage * 10 , (currentPage * 10) + 10).map((el:dataType) =>{
                                return(<Line line={el} ></Line>)
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Table;