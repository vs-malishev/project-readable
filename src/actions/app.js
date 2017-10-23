import { fetchCategories } from './categories';
import { fetchArticles } from './articles';
import { apiLoadingAction, apiErrorAction, apiSuccessAction } from './api';

export function fetchFromApi() {
    return (dispatch) => {
        dispatch(apiLoadingAction());
        Promise.all([
            fetchCategories(dispatch),
            fetchArticles(dispatch)
        ])
            .then(() => {
                dispatch(apiSuccessAction());
            })
            .catch(message => dispatch(apiErrorAction(message)));
    };
}