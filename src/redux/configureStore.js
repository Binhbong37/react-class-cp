import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { Dishes } from './reducer/dishes';
import { Promos } from './reducer/promotions';
import { Leaders } from './reducer/leaders';
import { Comments } from './reducer/comments';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            promotions: Promos,
            leaders: Leaders,
            comments: Comments,
        }),
        applyMiddleware(thunk, logger)
    );
    return store;
};
