import axios from 'axios'
import React, { useEffect } from 'react'
import Header from '../header'
import { storingData, removingData, updateData } from '../../store/slices/DataSlice'
import { useDispatch, useSelector } from 'react-redux'

const Component = () => {

    const dispatch = useDispatch()
    const gettingData = useSelector((state) => state.storeData.data)
    console.log(gettingData)

    useEffect(() => {
        fetchData()
    },[]) 


    const fetchData = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
            const resData = response.data.slice(0, 10)
            dispatch(storingData(resData))
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='main-container'>
            <Header />
            <div className="tbl-con">
                <table className="">
                    <thead className='tbl-body'>
                        <tr>
                            <th>Sr</th>
                            <th>Todo List</th>
                            <th>Status</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    {gettingData.map((item , index) => (
                        <tbody key={item.id} className='tblbody'>
                            <tr className='row'>
                                <td className='sr'>{index+1}</td>
                                <td className='tbl-data tblData'>{item.title}</td>
                                {item.completed ?
                                    <td className='tbl-data tblData'>Completed ✌</td> :
                                    <td className='tbl-data tblData'> Not Completed</td>}
                                <td><button className='cs-btn' onClick={() => dispatch(updateData(item.id))}> Change Status</button></td>
                                <td><button className='del-btn' onClick={() => dispatch(removingData(item.id))}>delete</button></td>
                            </tr>
                        </tbody>
                    ))}
                </table>
            </div>
        </div>
    )
}

export default Component
