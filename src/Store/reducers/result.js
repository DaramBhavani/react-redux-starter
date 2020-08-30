import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    results: []
}

const reducer = (state = initialState,action) => {
    console.log('inside reducer', state);

    switch(action.type){
        case actionTypes.STORE_RESULT:
            console.log('inside store result',state);
            return updateObject(state, {results:state.results.concat({id :new Date(), value :action.payload})});
            
        case actionTypes.DELETE_RESULT:
            // const id = 2;
            // const newArray = [...state.results];
            // newArray.splice(id,1)
            const updatedArray = state.results.filter(result => result.id !== action.resultEId);
            return updateObject(state, {results:updatedArray});
             
        default:
    }
    return state;   
}

export default reducer;