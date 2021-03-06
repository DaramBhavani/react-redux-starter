import * as actionTypes from './actionTypes';

// Action Creators

export const increment = () => {
    return {
        type : actionTypes.INCREMENT
    };
};

export const decrement = () => {
    return {
        type : actionTypes.DECREMENT
    };
};

export const add = (value) => {
    return {
        type : actionTypes.ADD,
        payload :value
    };
};

export const sub = (value) => {
    return {
        type : actionTypes.SUB,
        payload : value
    };
};


