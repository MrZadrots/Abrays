import React,{useEffect} from 'react'
import Table from '../components/table/table'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { useAppDispatch } from '../hooks/useAppDispatch'
import { fetchDataTable } from '../store/action-creators/data'
import { dataType } from '../types/types'
import SearchInput from '../components/searcher/search'

const MainPage:React.FC = () =>{
    const dispatch = useAppDispatch();
    const {data,error,loading} = useTypedSelector(state => state.data)
    let dataVisible:dataType[] = data

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
        <div>
            <div className='container'>
                <div className="row">
                    <SearchInput dataVisiavble={dataVisible}/>
                </div>
            </div>
            
        </div>
    )
}
export default MainPage


