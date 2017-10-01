import { combineReducers } from 'redux'
import apiStatusReducer from './apistatus'
import postsReducer from './posts'
import categoriesReducer from './categories'
import commentsReducer from './comments'

const rootReducer = combineReducers({
    apiStatusReducer,
    postsReducer,
    categoriesReducer,
    commentsReducer
});

export default rootReducer;
