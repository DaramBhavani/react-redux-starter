import * as actionTypes from './actionTypes';

//Action Creators

export const saveResult = (res) => {
    return {
        type : actionTypes.STORE_RESULT,
        payload : res
    };
};

export const storeResult = (res) => {
    return (dispatch,getState) => {
        setTimeout( () => {
            const oldCounter = getState().ctr.counter;
            console.log('oldCounter', oldCounter);
            dispatch(saveResult(res));
        },2000);
    }
};

export const deleteResult = (resEId) => {
    return {
        type : actionTypes.DELETE_RESULT,
        resultEId : resEId
    };
};