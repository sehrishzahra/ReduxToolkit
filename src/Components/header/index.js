
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {addingData, clearAllData} from '../../store/slices/DataSlice'

function Header() {
    const [inputData , setInputData] = useState('')
    const dispatch = useDispatch()

    const addingNewTodo = () => {
        const id = new Date().getTime().toString()
        const obj = {
            id : id ,
            title : inputData ,
            completed : false 
        }
        console.log(obj)
        dispatch(addingData(obj))
        setInputData('')
    }

    return (
        <div className='header'>
            <input type="text" className='input' placeholder='Add Data' value={inputData} onChange={(event => setInputData(event.target.value))}/>
            <div className="btn-container">
                <button className='btn' onClick={addingNewTodo}>Add</button>
                <button className='btn' onClick={() => dispatch(clearAllData())}>Clear All</button>
            </div>
        </div>
    )
}

export default Header