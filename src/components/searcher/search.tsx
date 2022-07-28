import React, { useCallback, useEffect, useState } from 'react'
import { dataType } from '../../types/types'
import './search.css'
import Table from '../table/table'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { Line } from '../line/line'
import { Pagination } from '../pagination/pagination'



interface ISearchInput{
    dataVisiavble: dataType[]
}
const PageSize = 10
const SearchInput:React.FC<ISearchInput> = (dataVisiavble) =>{

    const [searchText, setSearchText] = useState('')

    const [data, setData] = useState<dataType[]>(dataVisiavble.dataVisiavble)

    const onChangeHandler = (e:any)=> {
        setSearchText(e.target.value)
        const filteredData = dataVisiavble.dataVisiavble.filter(line =>{
            return line.id.toString().toLowerCase().includes(searchText.toLowerCase()) || 
                line.title.toLowerCase().includes(searchText.toLowerCase()) ||
                line.body.toLowerCase().includes(searchText.toLowerCase())
        })
        setData(filteredData)
    }

    const sorted = (massive:dataType[],name:string,mode:boolean) =>{
        switch(name){
            case 'id':
                if(mode){ 
                    return [...massive].sort((a, b) => a.id > b.id ? 1 : -1)
                }
                else{
                    return [...massive].sort((a, b) => a.id < b.id ? 1 : -1)
                }
            case 'title':
                if(mode){
                    return [...massive].sort((a, b) => a.title > b.title ? 1 : -1)
                }
                else{
                    return [...massive].sort((a, b) => a.title < b.title ? 1 : -1)
                }
            
            case 'body':
                    if(mode){
                        return [...massive].sort((a, b) => a.body > b.body ? 1 : -1)
                    }
                    else{
                        return [...massive].sort((a, b) => a.body < b.body ? 1 : -1)
                    }
            default:
                return massive   
        }

    }
    const sortedHandler = (e:any) =>{
       if(e.target.classList.contains('fa')){
            e.target.classList.toggle('rotate')
            if(e.target.classList.contains('id')){
                
                const tmp = sorted(data,'id',e.target.classList.contains('rotate'))
                setData(tmp)
            }
            if(e.target.classList.contains('title')){
                const tmp = sorted(data,'title',e.target.classList.contains('rotate'))
                setData(tmp)
                
            }
            if(e.target.classList.contains('body')){
                const tmp = sorted(data,'body',e.target.classList.contains('rotate'))
                setData(tmp)
            }
        }
    }

    return(
        <div className="mainContainer">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mainSearcher">
                        <input 
                            type='text'
                            name='searchText'
                            onChange={onChangeHandler}
                            className = "searched"
                            placeholder='Поиск'
                        >
                        </input>
                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.7353 19.4958L14.7101 13.4663C15.8979 12.0418 16.6124 10.2213 16.6124 8.23301C16.6124 3.69689 12.8896 0.00860596 8.31048 0.00860596C3.73132 0.00860596 0 3.70119 0 8.23731C0 12.7734 3.72272 16.4617 8.30187 16.4617C10.2472 16.4617 12.0375 15.7946 13.4577 14.68L19.5045 20.7267C19.8574 21.0796 20.3824 21.0796 20.7353 20.7267C21.0882 20.3738 21.0882 19.8487 20.7353 19.4958ZM1.76452 8.23731C1.76452 4.67383 4.69966 1.77743 8.30187 1.77743C11.9041 1.77743 14.8392 4.67383 14.8392 8.23731C14.8392 11.8008 11.9041 14.6972 8.30187 14.6972C4.69966 14.6972 1.76452 11.7965 1.76452 8.23731Z" fill="white"/>
                        </svg>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className="row">
                    <Table dataVisible={data} sortedHandler={sortedHandler}/>    
                </div>
            </div>
        </div>
    )
}

export default SearchInput