import { fetchCategories } from './categories';
import { fetchPosts } from './posts';
import { apiLoadingAction, apiErrorAction, apiSuccessAction } from './api';

export function fetchFromApi() {
    return (dispatch) => {
        dispatch(apiLoadingAction());
        Promise.all([
            fetchCategories(dispatch),
            fetchPosts(dispatch)
        ])
            .then(() => {
                dispatch(apiSuccessAction());
            })
            .catch(message => dispatch(apiErrorAction(message)));
    };
}