import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    counter : 0
}

const reducer = (state = initialState,action) => {

    switch(action.type){
        case actionTypes.INCREMENT:
            // const newState = Object.assign({},state);
            // newState.counter = state.counter + 1;
            // return newState;
            console.log('inside increment', action);
            console.log('inside increment',state);
            return updateObject(state, {counter: state.counter + 1});
  
        case actionTypes.DECREMENT:
            return updateObject(state, {counter: state.counter - 1});

        case actionTypes.ADD:
            return updateObject(state, {counter: state.counter + action.payload});

        case actionTypes.SUB:
            return updateObject(state, {counter: state.counter - action.payload});

        default:
    }
    return state;   
}

export default reducer;