import React from 'react';
import './BearCard.css';
import axios from 'axios'
import {useDispatch,useSelector } from 'react-redux'

const BearCard = props => {

    const dispatch = useDispatch();

    const deleteBear = async () => {
        await axios.delete(`http://localhost/api/bears/${props.id}`)
        dispatch({type: 'DELETE_BEAR',id:props.id})
      }

    return (
        <div className='bearcard-container'>
            <div className='bearcard' style={{ backgroundImage: `url('${props.img}')` }}>
                <p className='bearcard-weight'>{props.weight}</p>
                <p className='bearcard-name'>{props.name}</p>
            </div>
            <div className='bearcard-actions'>
                <div onClick={props.updateBear}>Update</div>
                <div onClick={deleteBear}>Delete</div>
            </div>
        </div>

    )
}

export default BearCard;