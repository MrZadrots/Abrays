import React from 'react'
import './table.css'


const Table:React.FC = () =>{
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
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Table;