import { createStore, combineReducers, applyMiddleware } from "../../node_modules/redux";
import logger from 'redux-logger';

const initialform = {
    name: '',
    weight: 0,
    img: ''
}

const formReducer = (data = initialform, action) => {
    switch(action.type){
        case 'CHANGE_NAME' : 
            return {...data,name: action.name}
        case 'CHANGE_WEIGHT' : 
            return {...data,weight: action.weight}
        case 'CHANGE_IMG' : 
            return {...data,img: action.img}
        default: return data;
    }
    
}


const bearReducer = (bears = [], action) => {
    switch (action.type) {
        case 'GET_BEARS':
            return action.bears;
        case 'ADD_BEAR':
            return [...bears,action.bear]
        case 'DELETE_BEAR':
            return bears.filter(bear=> +bear.id !== +action.id)
        case 'UPDATE_BEAR':
            return bears.map(bear => {
                if(+bear.id === +action.id)
                    return action.bear;
                else 
                    return bear;
            })
    }
    return bears;
}

const reducers = combineReducers({
    bear:bearReducer,
    form : formReducer,
})


export const store = createStore(reducers,applyMiddleware(logger));