import React, { useState, useEffect } from 'react'
import BearCard from './BearCard';
import './BearList.css';
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'

const BearList = props => {

    const bears = useSelector(state => state.bear);
    console.log('ISUS  = = ='+bears)
    const dispatch = useDispatch();

    const getBears = async () => {
        const result = await axios.get(`http://localhost/api/bears`)
        const action = { type: 'GET_BEARS', bears: result.data };
        dispatch(action)
    }

    useEffect(() => {
        getBears()
    }, [])


    if (!bears || !bears.length)
        return (<h2>No bears</h2>)

    return (
        <div className='bearlist-container'>
            {
                bears.map((bear, index) => (
                    <div key={index} style={{ margin: 5 }}>
                        <BearCard  {...bear} updateBear={() => props.updateBear(bear.id)} deleteBear={() => props.deleteBear(bear.id)} />
                    </div>
                ))
            }
        </div>

    )
}

export default BearList;