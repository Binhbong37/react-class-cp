import * as actionTypes from './actionTypes';

export const addComment = (dishId, rating, author, comment) => {
    return {
        type: actionTypes.ADD_COMMENT,
        payload: {
            dishId,
            rating,
            author,
            comment,
        },
    };
};
