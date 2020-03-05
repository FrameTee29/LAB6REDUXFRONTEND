import React from 'react';
import './BearCard.css';

const BearCard = props => {
    return (
        <div className='bearcard-container'>
            <div className='bearcard' style={{ backgroundImage: `url('${props.img}')` }}>
                <p className='bearcard-weight'>{props.weight}</p>
                <p className='bearcard-name'>{props.name}</p>
            </div>
            <div className='bearcard-actions'>
                <div onClick={props.updateBear}>Update</div>
                <div onClick={props.deleteBear}>Delete</div>
            </div>
        </div>

    )
}

export default BearCard;