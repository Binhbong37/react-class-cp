import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createForms } from 'react-redux-form';

import { Dishes } from './reducer/dishes';
import { Promos } from './reducer/promotions';
import { Leaders } from './reducer/leaders';
import { Comments } from './reducer/comments';
import { InitialFeedback } from './form';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            promotions: Promos,
            leaders: Leaders,
            comments: Comments,
            ...createForms({
                feedback: InitialFeedback,
            }),
        }),
        applyMiddleware(thunk, logger)
    );
    return store;
};
