import { COMMENTS } from '../../shared/dishes';
import * as actionTypes from '../actionTypes';

export const Comments = (state = COMMENTS, action) => {
    switch (action.type) {
        case actionTypes.ADD_COMMENT:
            const comment = action.payload;
            comment.id = state.length;
            comment.date = new Date().toISOString();

            return state.concat(comment);
        default:
            return state;
    }
};
