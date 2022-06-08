import * as ActionTypes from './actionTypes';

import { baseUrl } from '../shared/baseUrl';

//  comments

export const addComment = (dishId, rating, author, comment) => {
    return {
        type: ActionTypes.ADD_COMMENT,
        payload: {
            dishId,
            rating,
            author,
            comment,
        },
    };
};

export const fetchComments = () => (dispatch) => {
    return fetch(baseUrl + 'comments')
        .then((response) => response.json())
        .then((comments) => dispatch(addComments(comments)))
        .catch((err) => console.log('ERR', err));
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
        .then((response) => response.json())
        .then((dishes) => dispatch(addDishes(dishes)))
        .catch((err) => console.log('ERR', err));
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
        .then((response) => response.json())
        .then((promo) => dispatch(addPromo(promo)))
        .catch((err) => console.log('ERR', err));
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
