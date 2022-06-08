import * as ActionTypes from './actionTypes';

import { baseUrl } from '../shared/baseUrl';

//  comments

export const addComment = (comment) => {
    return {
        type: ActionTypes.ADD_COMMENT,
        payload: comment,
    };
};

export const postComment = (dishId, rating, author, comment) => (dispatch) => {
    const newComment = {
        dishId,
        rating,
        author,
        comment,
    };
    newComment.date = new Date().toISOString();
    return fetch(baseUrl + 'comments', {
        method: 'POST',
        body: JSON.stringify(newComment),
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'same-origin',
    })
        .then(
            (response) => {
                if (response.ok) {
                    return response;
                } else {
                    let error = new Error(
                        'Err: ' + response.status + ': ' + response.statusText
                    );
                    error.response = response;
                    throw error;
                }
            },
            (errors) => {
                let errMess = new Error(errors.message);
                throw errMess;
            }
        )
        .then((response) => response.json())
        .then((comment) => dispatch(addComment(comment)))
        .catch((err) => {
            alert('Could not be Post comment: ' + err.message);
            console.log('err Post', err.message);
        });
};

export const fetchComments = () => (dispatch) => {
    return fetch(baseUrl + 'comments')
        .then(
            (response) => {
                if (response.ok) {
                    return response;
                } else {
                    let error = new Error(
                        'Err: ' + response.status + ': ' + response.statusText
                    );
                    error.response = response;
                    throw error;
                }
            },
            (errors) => {
                let errMess = new Error(errors.message);
                throw errMess;
            }
        )
        .then((response) => response.json())
        .then((comments) => dispatch(addComments(comments)))
        .catch((err) => dispatch(commentsFailed(err.message)));
};

export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess,
});

export const addComments = (comments) => {
    return {
        type: ActionTypes.ADD_COMMENTS,
        payload: comments,
    };
};

// Dishes
export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));

    return fetch(baseUrl + 'dishes')
        .then(
            (response) => {
                if (response.ok) {
                    return response;
                } else {
                    let error = new Error(
                        'Err: ' + response.status + ': ' + response.statusText
                    );
                    error.response = response;
                    throw error;
                }
            },
            (errors) => {
                let errMess = new Error('Interval Serve' + errors.message);
                throw errMess;
            }
        )
        .then((response) => response.json())
        .then((dishes) => dispatch(addDishes(dishes)))
        .catch((err) => dispatch(dishesFailed(err.message)));
};

export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING,
});

export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess,
});

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes,
});

// PROMOS
export const fetchPromotions = () => (dispatch) => {
    dispatch(promoLoading(true));

    return fetch(baseUrl + 'promotions')
        .then(
            (response) => {
                if (response.ok) {
                    return response;
                } else {
                    let error = new Error(
                        'Err: ' + response.status + ': ' + response.statusText
                    );
                    error.response = response;
                    throw error;
                }
            },
            (errors) => {
                let errMess = new Error(errors.message);
                throw errMess;
            }
        )
        .then((response) => response.json())
        .then((promo) => dispatch(addPromo(promo)))
        .catch((err) => dispatch(promoFailed(err.message)));
};

export const promoLoading = () => ({
    type: ActionTypes.PROMOS_LOADING,
});

export const promoFailed = (errmess) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errmess,
});

export const addPromo = (propmo) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: propmo,
});
